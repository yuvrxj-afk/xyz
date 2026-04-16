import { onekoConfig } from '@/config/Cat';
import Script from 'next/script';
import React from 'react';

export default function OnekoCat() {
  if (!onekoConfig.enabled) {
    return null;
  }

  return <Script src="./oneko/oneko.js" data-cat="./oneko/oneko.gif" />;
}
