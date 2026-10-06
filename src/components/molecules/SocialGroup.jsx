import React from 'react';
import { Mail } from 'lucide-react';
import { IconButton } from '../atoms/IconButton';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../atoms/SocialIcons';

export const SocialGroup = ({ socials = {}, email, className = '' }) => (
  <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
    {socials.github && (
      <IconButton icon={GithubIcon} href={socials.github} title="GitHub Profile" />
    )}
    {socials.linkedin && (
      <IconButton icon={LinkedinIcon} href={socials.linkedin} title="LinkedIn Profile" />
    )}
    {socials.twitter && (
      <IconButton icon={TwitterIcon} href={socials.twitter} title="Twitter / X" />
    )}
    {email && (
      <IconButton icon={Mail} href={`mailto:${email}`} title="Send Email" />
    )}
  </div>
);
