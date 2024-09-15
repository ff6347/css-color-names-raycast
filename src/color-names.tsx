import { ActionPanel, Action, Icon, List } from "@raycast/api";
import {colors} from './colors';
import fs from "node:fs";
// import path from 'path';
import { fileURLToPath } from 'url';
// Get the current file's directory
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get the folder name (basename of the directory)
// const folderName = path.basename(__dirname);




const ITEMS = colors().items.map((item) => {
  return {
    id: item.arg,
    name: item.title,
    hex: item.hex,
    hsl: item.hsl,
    rgb: item.rgb,

  };
});

export default function Command() {
  return (
    <List>
      {ITEMS.map((item) => (
        <List.Item
          key={item.id}
          icon={{ source: `${item.id}.png` }}
          title={item.name}
          subtitle={item.hex}
          // accessories={[{ icon: Icon.Text, text: item.accessory }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={item.id}
                title={item.id}
              shortcut={{ modifiers: ["cmd"], key: "return" }}
              />
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
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
