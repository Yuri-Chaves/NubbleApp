import React from 'react';
import { Pressable } from 'react-native';

import { useAppTheme } from '@hooks';
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BellOn,
  Bookmark,
  BookmarkFill,
  Camera,
  Chat,
  ChatOn,
  Check,
  CheckRound,
  ChevronRight,
  Comment,
  ErrorRound,
  EyeOff,
  EyeOn,
  FlashOff,
  FlashOn,
  Heart,
  HeartFill,
  Home,
  HomeFill,
  Message,
  MessageRound,
  NewPost,
  Profile,
  ProfileFill,
  Search,
  Settings,
  Trash,
} from '@icons';
import { ThemeColors } from '@theme';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  size?: number;
  color?: ThemeColors;
  onPress?: () => void;
}

export function Icon({
  name,
  size,
  color = 'backgroundContrast',
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVCIcon = iconRegistry[name];
  if (onPress) {
    return (
      <Pressable testID={name} onPress={onPress} hitSlop={10}>
        <SVCIcon size={size} color={colors[color]} />
      </Pressable>
    );
  }
  return <SVCIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  bell: Bell,
  bellOn: BellOn,
  bookmark: Bookmark,
  bookmarkFill: BookmarkFill,
  camera: Camera,
  chat: Chat,
  chatOn: ChatOn,
  check: Check,
  checkRound: CheckRound,
  chevronRight: ChevronRight,
  comment: Comment,
  errorRound: ErrorRound,
  eyeOff: EyeOff,
  eyeOn: EyeOn,
  flashOff: FlashOff,
  flashOn: FlashOn,
  heart: Heart,
  heartFill: HeartFill,
  home: Home,
  homeFill: HomeFill,
  message: Message,
  messageRound: MessageRound,
  newPost: NewPost,
  profile: Profile,
  profileFill: ProfileFill,
  search: Search,
  settings: Settings,
  trash: Trash,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
