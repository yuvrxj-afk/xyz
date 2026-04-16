'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { githubConfig } from '@/config/Github';
import { Github as GithubLucide } from 'lucide-react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import GithubIcon from '../svgs/Github';

const ActivityCalendar = dynamic(
  () => import('react-activity-calendar').then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE';
};

function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo;
  });
}

export default function Github() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`,
        );
        const data: { contributions?: unknown[] } = await response.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          const flattenedContributions = data.contributions.flat();

          const contributionLevelMap = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          };

          const validContributions = flattenedContributions
            .filter(
              (item: unknown): item is GitHubContributionResponse =>
                typeof item === 'object' &&
                item !== null &&
                'date' in item &&
                'contributionCount' in item &&
                'contributionLevel' in item,
            )
            .map((item: GitHubContributionResponse) => ({
              date: String(item.date),
              count: Number(item.contributionCount || 0),
              level: (contributionLevelMap[
                item.contributionLevel as keyof typeof contributionLevelMap
              ] || 0) as ContributionItem['level'],
            }));

          if (validContributions.length > 0) {
            const total = validContributions.reduce(
              (sum, item) => sum + item.count,
              0,
            );
            setTotalContributions(total);

            const filteredContributions = filterLastYear(validContributions);
            setContributions(filteredContributions);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error('Failed to fetch GitHub contributions:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Container className="mt-0">
      <SectionHeading subHeading="Open source" heading="GitHub" />
      <p className="text-muted-foreground mt-3 text-sm">
        <span className="text-foreground font-medium">
          {githubConfig.username}
        </span>
        &nbsp;· {githubConfig.subtitle}
      </p>
      {!isLoading && !hasError && totalContributions > 0 && (
        <div className="mt-3">
          <Badge variant="secondary">
            {totalContributions.toLocaleString()} contributions (range shown)
          </Badge>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-6">
        {isLoading ? (
          <Card className="shadow-sm">
            <CardContent className="flex flex-col gap-4 py-10">
              <Skeleton className="h-36 w-full rounded-lg" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-32" />
              </div>
              <p className="text-muted-foreground text-center text-sm">
                {githubConfig.loadingState.description}
              </p>
            </CardContent>
          </Card>
        ) : hasError || contributions.length === 0 ? (
          <Alert className="border-dashed">
            <GithubLucide className="size-4" />
            <AlertTitle>{githubConfig.errorState.title}</AlertTitle>
            <AlertDescription className="flex flex-col gap-4">
              <p>{githubConfig.errorState.description}</p>
              <Button variant="outline" asChild>
                <Link
                  href={`https://github.com/${githubConfig.username}`}
                  className="inline-flex w-fit items-center gap-2"
                >
                  <GithubIcon className="size-4" />
                  {githubConfig.errorState.buttonText}
                </Link>
              </Button>
            </AlertDescription>
          </Alert>
        ) : (
          <Card className="shadow-sm">
            <CardContent className="pt-6">
              <div className="w-full overflow-x-auto">
                <ActivityCalendar
                  data={contributions}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={githubConfig.fontSize}
                  colorScheme={theme === 'dark' ? 'dark' : 'light'}
                  maxLevel={githubConfig.maxLevel}
                  hideTotalCount={true}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  theme={githubConfig.theme}
                  labels={{
                    months: githubConfig.months,
                    weekdays: githubConfig.weekdays,
                    totalCount: githubConfig.totalCountLabel,
                  }}
                  style={{
                    color: 'var(--muted-foreground)',
                  }}
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Container>
  );
}
