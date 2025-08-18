import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React, { memo } from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

type TabIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
};

const TabIcon = memo(({ focused, icon, title }: TabIconProps) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
});

TabIcon.displayName = "TabIcon";

const TABS = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "saved", title: "Saved", icon: icons.save },
  { name: "search", title: "Search", icon: icons.search },
  { name: "profile", title: "Profile", icon: icons.person },
];

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      {TABS.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icon} title={title} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _Layout;
