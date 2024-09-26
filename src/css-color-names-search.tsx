import { ActionPanel, Action, List, LocalStorage, Icon, Image } from "@raycast/api";
import { colors } from "./colors";
import { useEffect, useState } from "react";
// import { useLocalStorage } from "@raycast/utils";

// const FAVORITES_KEY = "favorites";

const ITEMS = colors().items.map((item) => {
  return {
    id: item.arg,
    name: item.title,
    hex: item.hex,
    hsl: item.hsl,
    rgb: item.rgb,
  };
});
type ColorItem = (typeof ITEMS)[number];

function Item({
  item,
  isFavorite,
  onFavoriteChange,
}: {
  item: ColorItem;
  isFavorite: boolean;
  onFavoriteChange: () => void;
}) {
  return (
    <List.Item
      key={item.id}
      icon={{
        source: `${item.id}.png`,
        mask: Image.Mask.RoundedRectangle,
      }}
      title={item.id}
      subtitle={`hex: ${item.hex} hsl: ${item.hsl.join(", ")} rgb: ${item.rgb.join(", ")}`}
      // accessories={[{ icon: Icon.CopyClipboard, text: item.id }]}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard content={item.id} title={item.id} shortcut={{ modifiers: ["cmd"], key: "return" }} />
          <Action.CopyToClipboard
            title={item.hex}
            content={item.hex}
            shortcut={{ modifiers: ["opt"], key: "return" }}
          />
          <Action.CopyToClipboard
            title={`hsl ${item.hsl.join(", ")}`}
            content={item.hsl.join(", ")}
            shortcut={{ modifiers: ["ctrl"], key: "return" }}
          />
          <Action.CopyToClipboard
            title={`rgb ${item.rgb.join(", ")}`}
            content={item.rgb.join(", ")}
            shortcut={{ modifiers: ["ctrl", "shift"], key: "return" }}
          />
          {isFavorite ? (
            <Action
              title="Remove from Favorites"
              icon={Icon.Trash}
              style={Action.Style.Destructive}
              onAction={async () => {
                await LocalStorage.removeItem(item.id);
                onFavoriteChange(); // Call this after changing favorites
              }}
              shortcut={{ modifiers: ["cmd"], key: "x" }}
            />
          ) : (
            <Action
              title="Add to Favorites"
              icon={Icon.Star}
              onAction={async () => {
                const currentFavorites = await LocalStorage.getItem(item.id);
                if (!currentFavorites) {
                  await LocalStorage.setItem(item.id, JSON.stringify(item));
                  onFavoriteChange(); // Call this after changing favorites
                }
              }}
              shortcut={{ modifiers: ["cmd"], key: "s" }}
            />
          )}
        </ActionPanel>
      }
    />
  );
}

export default function Command() {
  const [favorites, setFavorites] = useState<{ [key: string]: string } | null>(null);
  // const { value: todos, setValue: setTodos, isLoading } = useLocalStorage(FAVORITES_KEY,[] );

  const [searchText, setSearchText] = useState("");

  const getFavorites = async () => {
    const fav = await LocalStorage.allItems();

    return fav;
  };

  const refreshFavorites = () => {
    getFavorites().then(setFavorites);
  };

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  return (
    <List navigationTitle="Color Search" searchBarPlaceholder="Search for a color">
      <List.Section title="Favorites">
        {favorites &&
          Object.keys(favorites).map((fav) => {
            const item = JSON.parse(favorites[fav]) as ColorItem;
            return <Item key={item.id} item={item} isFavorite={true} onFavoriteChange={refreshFavorites} />;
          })}
      </List.Section>

      <List.Section title="Colors">
        {ITEMS.map((item) => (
          <Item key={item.id} item={item} isFavorite={false} onFavoriteChange={refreshFavorites} />
        ))}
      </List.Section>
    </List>
  );
}
