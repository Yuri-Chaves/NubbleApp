import React from 'react';
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
  ChevronRight,
  Comment,
  EyeOff,
  EyeOn,
  FlashOff,
  FlashOn,
  Heart,
  HeartFill,
  Home,
  HomeFill,
  Message,
  NewPost,
  Profile,
  ProfileFill,
  Search,
  Settings,
  Trash,
} from '@icons';
import {ThemeColors} from '@theme';
import {useAppTheme} from '@hooks';
import {Pressable} from 'react-native';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
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
}: Props) {
  const {colors} = useAppTheme();
  const SVCIcon = iconRegistry[name];
  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
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
  chevronRight: ChevronRight,
  comment: Comment,
  eyeOff: EyeOff,
  eyeOn: EyeOn,
  flashOff: FlashOff,
  flashOn: FlashOn,
  heart: Heart,
  heartFill: HeartFill,
  home: Home,
  homeFill: HomeFill,
  message: Message,
  newPost: NewPost,
  profile: Profile,
  profileFill: ProfileFill,
  search: Search,
  settings: Settings,
  trash: Trash,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
