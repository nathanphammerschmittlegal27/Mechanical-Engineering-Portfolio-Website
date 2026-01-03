import React from 'react';

const LINK_PATTERNS = /(David Macaulay|Giovanni Battista Piranesi|Stephen Bauman|fully custom-fit, 3D-printed shoes|Complex Fluids Lab|nexusfootwear\.com)/g;

function getUrl(text: string): string | null {
  if (text === 'nexusfootwear.com' || text === 'fully custom-fit, 3D-printed shoes') {
    return 'https://nexusfootwear.com';
  }
  if (text === 'Complex Fluids Lab') {
    return 'https://hashmilab.sites.northeastern.edu/';
  }
  if (text === 'David Macaulay') {
    return 'https://en.wikipedia.org/wiki/David_Macaulay';
  }
  if (text === 'Giovanni Battista Piranesi') {
    return 'https://en.wikipedia.org/wiki/Giovanni_Battista_Piranesi';
  }
  if (text === 'Stephen Bauman') {
    return 'https://www.instagram.com/stephenbaumanartwork/?hl=en';
  }
  return null;
}

export function parseDescriptionWithLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  // Find all matches
  const matches: Array<{ index: number; text: string; url: string }> = [];
  const regex = new RegExp(LINK_PATTERNS.source, LINK_PATTERNS.flags);
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    const url = getUrl(match[1]);
    if (url) {
      matches.push({ index: match.index, text: match[1], url });
    }
  }

  // Build parts array
  for (const matchItem of matches) {
    // Add text before match
    if (matchItem.index > lastIndex) {
      parts.push(text.substring(lastIndex, matchItem.index));
    }
    
    // Add link
    parts.push(
      <a
        key={key++}
        href={matchItem.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-gray-800 hover:text-gray-900"
      >
        {matchItem.text}
      </a>
    );
    
    lastIndex = matchItem.index + matchItem.text.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

