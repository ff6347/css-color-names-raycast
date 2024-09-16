const hexToRgb = (hex:string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};
const getBrightness = (rgb: number[]) => (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
// Convert hex to HSL and extract hue
const getHue = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;

  if (max === min) return 0;

  const d = max - min;
  switch (max) {
    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
    case g: h = (b - r) / d + 2; break;
    case b: h = (r - g) / d + 4; break;
  }
  if (h === undefined) return 0;

  return h / 6; // Normalize to [0, 1]
};


const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

export const colors = () => {

  const c =  colorsRaw.items.map((color) => {
    const rgb = hexToRgb(color.hex.split("#")[1]);
    const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
    return {
      hsl,
      rgb,
      title: color.title,
      arg: color.arg,
      hex: color.hex,

    }
  }).sort((a, b) => getHue(a.hex) - getHue(b.hex));
  ;
    return {items: c};
}

const colorsRaw = {
  "items": [
    {
      "icon": {
        "path": "images/aliceblue.png"
      },
      "title": "Aliceblue",
      "arg": "aliceblue",
      "hex":"#f0f8ff",
      "text": {
        "copy": "#f0f8ff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "aliceblue",
          "hex": "aliceblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f0f8ff",
          "hex": "#f0f8ff -> Copy Hex"
        }
      },
      "aliceblue": "#f0f8ff"
    },
    {
      "icon": {
        "path": "images/antiquewhite.png"
      },
      "title": "Antiquewhite",
      "arg": "antiquewhite",
      "hex":"#faebd7",
      "text": {
        "copy": "#faebd7"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "antiquewhite",
          "hex": "antiquewhite -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#faebd7",
          "hex": "#faebd7 -> Copy Hex"
        }
      },
      "antiquewhite": "#faebd7"
    },
    {
      "icon": {
        "path": "images/aqua.png"
      },
      "title": "Aqua",
      "arg": "aqua",
      "hex":"#00ffff",
      "text": {
        "copy": "#00ffff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "aqua",
          "hex": "aqua -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#00ffff",
          "hex": "#00ffff -> Copy Hex"
        }
      },
      "aqua": "#00ffff"
    },
    {
      "icon": {
        "path": "images/aquamarine.png"
      },
      "title": "Aquamarine",
      "arg": "aquamarine",
      "hex":"#7fffd4",
      "text": {
        "copy": "#7fffd4"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "aquamarine",
          "hex": "aquamarine -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#7fffd4",
          "hex": "#7fffd4 -> Copy Hex"
        }
      },
      "aquamarine": "#7fffd4"
    },
    {
      "icon": {
        "path": "images/azure.png"
      },
      "title": "Azure",
      "arg": "azure",
      "hex":"#f0ffff",
      "text": {
        "copy": "#f0ffff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "azure",
          "hex": "azure -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f0ffff",
          "hex": "#f0ffff -> Copy Hex"
        }
      },
      "azure": "#f0ffff"
    },
    {
      "icon": {
        "path": "images/beige.png"
      },
      "title": "Beige",
      "arg": "beige",
      "hex":"#f5f5dc",
      "text": {
        "copy": "#f5f5dc"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "beige",
          "hex": "beige -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f5f5dc",
          "hex": "#f5f5dc -> Copy Hex"
        }
      },
      "beige": "#f5f5dc"
    },
    {
      "icon": {
        "path": "images/bisque.png"
      },
      "title": "Bisque",
      "arg": "bisque",
      "hex":"#ffe4c4",
      "text": {
        "copy": "#ffe4c4"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "bisque",
          "hex": "bisque -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffe4c4",
          "hex": "#ffe4c4 -> Copy Hex"
        }
      },
      "bisque": "#ffe4c4"
    },
    {
      "icon": {
        "path": "images/black.png"
      },
      "title": "Black",
      "arg": "black",
      "hex":"#000000",
      "text": {
        "copy": "#000000"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "black",
          "hex": "black -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#000000",
          "hex": "#000000 -> Copy Hex"
        }
      },
      "black": "#000000"
    },
    {
      "icon": {
        "path": "images/blanchedalmond.png"
      },
      "title": "Blanchedalmond",
      "arg": "blanchedalmond",
      "hex":"#ffebcd",
      "text": {
        "copy": "#ffebcd"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "blanchedalmond",
          "hex": "blanchedalmond -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffebcd",
          "hex": "#ffebcd -> Copy Hex"
        }
      },
      "blanchedalmond": "#ffebcd"
    },
    {
      "icon": {
        "path": "images/blue.png"
      },
      "title": "Blue",
      "arg": "blue",
      "hex":"#0000ff",
      "text": {
        "copy": "#0000ff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "blue",
          "hex": "blue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#0000ff",
          "hex": "#0000ff -> Copy Hex"
        }
      },
      "blue": "#0000ff"
    },
    {
      "icon": {
        "path": "images/blueviolet.png"
      },
      "title": "Blueviolet",
      "arg": "blueviolet",
      "hex":"#8a2be2",
      "text": {
        "copy": "#8a2be2"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "blueviolet",
          "hex": "blueviolet -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#8a2be2",
          "hex": "#8a2be2 -> Copy Hex"
        }
      },
      "blueviolet": "#8a2be2"
    },
    {
      "icon": {
        "path": "images/brown.png"
      },
      "title": "Brown",
      "arg": "brown",
      "hex":"#a52a2a",
      "text": {
        "copy": "#a52a2a"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "brown",
          "hex": "brown -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#a52a2a",
          "hex": "#a52a2a -> Copy Hex"
        }
      },
      "brown": "#a52a2a"
    },
    {
      "icon": {
        "path": "images/burlywood.png"
      },
      "title": "Burlywood",
      "arg": "burlywood",
      "hex":"#deb887",
      "text": {
        "copy": "#deb887"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "burlywood",
          "hex": "burlywood -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#deb887",
          "hex": "#deb887 -> Copy Hex"
        }
      },
      "burlywood": "#deb887"
    },
    {
      "icon": {
        "path": "images/cadetblue.png"
      },
      "title": "Cadetblue",
      "arg": "cadetblue",
      "hex":"#5f9ea0",
      "text": {
        "copy": "#5f9ea0"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "cadetblue",
          "hex": "cadetblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#5f9ea0",
          "hex": "#5f9ea0 -> Copy Hex"
        }
      },
      "cadetblue": "#5f9ea0"
    },
    {
      "icon": {
        "path": "images/chartreuse.png"
      },
      "title": "Chartreuse",
      "arg": "chartreuse",
      "hex":"#7fff00",
      "text": {
        "copy": "#7fff00"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "chartreuse",
          "hex": "chartreuse -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#7fff00",
          "hex": "#7fff00 -> Copy Hex"
        }
      },
      "chartreuse": "#7fff00"
    },
    {
      "icon": {
        "path": "images/chocolate.png"
      },
      "title": "Chocolate",
      "arg": "chocolate",
      "hex":"#d2691e",
      "text": {
        "copy": "#d2691e"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "chocolate",
          "hex": "chocolate -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#d2691e",
          "hex": "#d2691e -> Copy Hex"
        }
      },
      "chocolate": "#d2691e"
    },
    {
      "icon": {
        "path": "images/coral.png"
      },
      "title": "Coral",
      "arg": "coral",
      "hex":"#ff7f50",
      "text": {
        "copy": "#ff7f50"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "coral",
          "hex": "coral -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff7f50",
          "hex": "#ff7f50 -> Copy Hex"
        }
      },
      "coral": "#ff7f50"
    },
    {
      "icon": {
        "path": "images/cornflowerblue.png"
      },
      "title": "Cornflowerblue",
      "arg": "cornflowerblue",
      "hex":"#6495ed",
      "text": {
        "copy": "#6495ed"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "cornflowerblue",
          "hex": "cornflowerblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#6495ed",
          "hex": "#6495ed -> Copy Hex"
        }
      },
      "cornflowerblue": "#6495ed"
    },
    {
      "icon": {
        "path": "images/cornsilk.png"
      },
      "title": "Cornsilk",
      "arg": "cornsilk",
      "hex":"#fff8dc",
      "text": {
        "copy": "#fff8dc"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "cornsilk",
          "hex": "cornsilk -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fff8dc",
          "hex": "#fff8dc -> Copy Hex"
        }
      },
      "cornsilk": "#fff8dc"
    },
    {
      "icon": {
        "path": "images/crimson.png"
      },
      "title": "Crimson",
      "arg": "crimson",
      "hex":"#dc143c",
      "text": {
        "copy": "#dc143c"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "crimson",
          "hex": "crimson -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#dc143c",
          "hex": "#dc143c -> Copy Hex"
        }
      },
      "crimson": "#dc143c"
    },
    {
      "icon": {
        "path": "images/cyan.png"
      },
      "title": "Cyan",
      "arg": "cyan",
      "hex":"#00ffff",
      "text": {
        "copy": "#00ffff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "cyan",
          "hex": "cyan -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#00ffff",
          "hex": "#00ffff -> Copy Hex"
        }
      },
      "cyan": "#00ffff"
    },
    {
      "icon": {
        "path": "images/darkblue.png"
      },
      "title": "Darkblue",
      "arg": "darkblue",
      "hex":"#00008b",
      "text": {
        "copy": "#00008b"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkblue",
          "hex": "darkblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#00008b",
          "hex": "#00008b -> Copy Hex"
        }
      },
      "darkblue": "#00008b"
    },
    {
      "icon": {
        "path": "images/darkcyan.png"
      },
      "title": "Darkcyan",
      "arg": "darkcyan",
      "hex":"#008b8b",
      "text": {
        "copy": "#008b8b"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkcyan",
          "hex": "darkcyan -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#008b8b",
          "hex": "#008b8b -> Copy Hex"
        }
      },
      "darkcyan": "#008b8b"
    },
    {
      "icon": {
        "path": "images/darkgoldenrod.png"
      },
      "title": "Darkgoldenrod",
      "arg": "darkgoldenrod",
      "hex":"#b8860b",
      "text": {
        "copy": "#b8860b"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkgoldenrod",
          "hex": "darkgoldenrod -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#b8860b",
          "hex": "#b8860b -> Copy Hex"
        }
      },
      "darkgoldenrod": "#b8860b"
    },
    {
      "icon": {
        "path": "images/darkgray.png"
      },
      "title": "Darkgray",
      "arg": "darkgray",
      "hex":"#a9a9a9",
      "text": {
        "copy": "#a9a9a9"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkgray",
          "hex": "darkgray -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#a9a9a9",
          "hex": "#a9a9a9 -> Copy Hex"
        }
      },
      "darkgray": "#a9a9a9"
    },
    {
      "icon": {
        "path": "images/darkgreen.png"
      },
      "title": "Darkgreen",
      "arg": "darkgreen",
      "hex":"#006400",
      "text": {
        "copy": "#006400"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkgreen",
          "hex": "darkgreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#006400",
          "hex": "#006400 -> Copy Hex"
        }
      },
      "darkgreen": "#006400"
    },
    {
      "icon": {
        "path": "images/darkgrey.png"
      },
      "title": "Darkgrey",
      "arg": "darkgrey",
      "hex":"#a9a9a9",
      "text": {
        "copy": "#a9a9a9"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkgrey",
          "hex": "darkgrey -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#a9a9a9",
          "hex": "#a9a9a9 -> Copy Hex"
        }
      },
      "darkgrey": "#a9a9a9"
    },
    {
      "icon": {
        "path": "images/darkkhaki.png"
      },
      "title": "Darkkhaki",
      "arg": "darkkhaki",
      "hex":"#bdb76b",
      "text": {
        "copy": "#bdb76b"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkkhaki",
          "hex": "darkkhaki -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#bdb76b",
          "hex": "#bdb76b -> Copy Hex"
        }
      },
      "darkkhaki": "#bdb76b"
    },
    {
      "icon": {
        "path": "images/darkmagenta.png"
      },
      "title": "Darkmagenta",
      "arg": "darkmagenta",
      "hex":"#8b008b",
      "text": {
        "copy": "#8b008b"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkmagenta",
          "hex": "darkmagenta -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#8b008b",
          "hex": "#8b008b -> Copy Hex"
        }
      },
      "darkmagenta": "#8b008b"
    },
    {
      "icon": {
        "path": "images/darkolivegreen.png"
      },
      "title": "Darkolivegreen",
      "arg": "darkolivegreen",
      "hex":"#556b2f",
      "text": {
        "copy": "#556b2f"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkolivegreen",
          "hex": "darkolivegreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#556b2f",
          "hex": "#556b2f -> Copy Hex"
        }
      },
      "darkolivegreen": "#556b2f"
    },
    {
      "icon": {
        "path": "images/darkorange.png"
      },
      "title": "Darkorange",
      "arg": "darkorange",
      "hex":"#ff8c00",
      "text": {
        "copy": "#ff8c00"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkorange",
          "hex": "darkorange -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff8c00",
          "hex": "#ff8c00 -> Copy Hex"
        }
      },
      "darkorange": "#ff8c00"
    },
    {
      "icon": {
        "path": "images/darkorchid.png"
      },
      "title": "Darkorchid",
      "arg": "darkorchid",
      "hex":"#9932cc",
      "text": {
        "copy": "#9932cc"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkorchid",
          "hex": "darkorchid -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#9932cc",
          "hex": "#9932cc -> Copy Hex"
        }
      },
      "darkorchid": "#9932cc"
    },
    {
      "icon": {
        "path": "images/darkred.png"
      },
      "title": "Darkred",
      "arg": "darkred",
      "hex":"#8b0000",
      "text": {
        "copy": "#8b0000"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkred",
          "hex": "darkred -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#8b0000",
          "hex": "#8b0000 -> Copy Hex"
        }
      },
      "darkred": "#8b0000"
    },
    {
      "icon": {
        "path": "images/darksalmon.png"
      },
      "title": "Darksalmon",
      "arg": "darksalmon",
      "hex":"#e9967a",
      "text": {
        "copy": "#e9967a"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darksalmon",
          "hex": "darksalmon -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#e9967a",
          "hex": "#e9967a -> Copy Hex"
        }
      },
      "darksalmon": "#e9967a"
    },
    {
      "icon": {
        "path": "images/darkseagreen.png"
      },
      "title": "Darkseagreen",
      "arg": "darkseagreen",
      "hex":"#8fbc8f",
      "text": {
        "copy": "#8fbc8f"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkseagreen",
          "hex": "darkseagreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#8fbc8f",
          "hex": "#8fbc8f -> Copy Hex"
        }
      },
      "darkseagreen": "#8fbc8f"
    },
    {
      "icon": {
        "path": "images/darkslateblue.png"
      },
      "title": "Darkslateblue",
      "arg": "darkslateblue",
      "hex":"#483d8b",
      "text": {
        "copy": "#483d8b"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkslateblue",
          "hex": "darkslateblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#483d8b",
          "hex": "#483d8b -> Copy Hex"
        }
      },
      "darkslateblue": "#483d8b"
    },
    {
      "icon": {
        "path": "images/darkslategray.png"
      },
      "title": "Darkslategray",
      "arg": "darkslategray",
      "hex":"#2f4f4f",
      "text": {
        "copy": "#2f4f4f"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkslategray",
          "hex": "darkslategray -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#2f4f4f",
          "hex": "#2f4f4f -> Copy Hex"
        }
      },
      "darkslategray": "#2f4f4f"
    },
    {
      "icon": {
        "path": "images/darkslategrey.png"
      },
      "title": "Darkslategrey",
      "arg": "darkslategrey",
      "hex":"#2f4f4f",
      "text": {
        "copy": "#2f4f4f"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkslategrey",
          "hex": "darkslategrey -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#2f4f4f",
          "hex": "#2f4f4f -> Copy Hex"
        }
      },
      "darkslategrey": "#2f4f4f"
    },
    {
      "icon": {
        "path": "images/darkturquoise.png"
      },
      "title": "Darkturquoise",
      "arg": "darkturquoise",
      "hex":"#00ced1",
      "text": {
        "copy": "#00ced1"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkturquoise",
          "hex": "darkturquoise -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#00ced1",
          "hex": "#00ced1 -> Copy Hex"
        }
      },
      "darkturquoise": "#00ced1"
    },
    {
      "icon": {
        "path": "images/darkviolet.png"
      },
      "title": "Darkviolet",
      "arg": "darkviolet",
      "hex":"#9400d3",
      "text": {
        "copy": "#9400d3"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "darkviolet",
          "hex": "darkviolet -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#9400d3",
          "hex": "#9400d3 -> Copy Hex"
        }
      },
      "darkviolet": "#9400d3"
    },
    {
      "icon": {
        "path": "images/deeppink.png"
      },
      "title": "Deeppink",
      "arg": "deeppink",
      "hex":"#ff1493",
      "text": {
        "copy": "#ff1493"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "deeppink",
          "hex": "deeppink -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff1493",
          "hex": "#ff1493 -> Copy Hex"
        }
      },
      "deeppink": "#ff1493"
    },
    {
      "icon": {
        "path": "images/deepskyblue.png"
      },
      "title": "Deepskyblue",
      "arg": "deepskyblue",
      "hex":"#00bfff",
      "text": {
        "copy": "#00bfff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "deepskyblue",
          "hex": "deepskyblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#00bfff",
          "hex": "#00bfff -> Copy Hex"
        }
      },
      "deepskyblue": "#00bfff"
    },
    {
      "icon": {
        "path": "images/dimgray.png"
      },
      "title": "Dimgray",
      "arg": "dimgray",
      "hex":"#696969",
      "text": {
        "copy": "#696969"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "dimgray",
          "hex": "dimgray -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#696969",
          "hex": "#696969 -> Copy Hex"
        }
      },
      "dimgray": "#696969"
    },
    {
      "icon": {
        "path": "images/dimgrey.png"
      },
      "title": "Dimgrey",
      "arg": "dimgrey",
      "hex":"#696969",
      "text": {
        "copy": "#696969"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "dimgrey",
          "hex": "dimgrey -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#696969",
          "hex": "#696969 -> Copy Hex"
        }
      },
      "dimgrey": "#696969"
    },
    {
      "icon": {
        "path": "images/dodgerblue.png"
      },
      "title": "Dodgerblue",
      "arg": "dodgerblue",
      "hex":"#1e90ff",
      "text": {
        "copy": "#1e90ff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "dodgerblue",
          "hex": "dodgerblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#1e90ff",
          "hex": "#1e90ff -> Copy Hex"
        }
      },
      "dodgerblue": "#1e90ff"
    },
    {
      "icon": {
        "path": "images/firebrick.png"
      },
      "title": "Firebrick",
      "arg": "firebrick",
      "hex":"#b22222",
      "text": {
        "copy": "#b22222"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "firebrick",
          "hex": "firebrick -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#b22222",
          "hex": "#b22222 -> Copy Hex"
        }
      },
      "firebrick": "#b22222"
    },
    {
      "icon": {
        "path": "images/floralwhite.png"
      },
      "title": "Floralwhite",
      "arg": "floralwhite",
      "hex":"#fffaf0",
      "text": {
        "copy": "#fffaf0"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "floralwhite",
          "hex": "floralwhite -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fffaf0",
          "hex": "#fffaf0 -> Copy Hex"
        }
      },
      "floralwhite": "#fffaf0"
    },
    {
      "icon": {
        "path": "images/forestgreen.png"
      },
      "title": "Forestgreen",
      "arg": "forestgreen",
      "hex":"#228b22",
      "text": {
        "copy": "#228b22"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "forestgreen",
          "hex": "forestgreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#228b22",
          "hex": "#228b22 -> Copy Hex"
        }
      },
      "forestgreen": "#228b22"
    },
    {
      "icon": {
        "path": "images/fuchsia.png"
      },
      "title": "Fuchsia",
      "arg": "fuchsia",
      "hex":"#ff00ff",
      "text": {
        "copy": "#ff00ff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "fuchsia",
          "hex": "fuchsia -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff00ff",
          "hex": "#ff00ff -> Copy Hex"
        }
      },
      "fuchsia": "#ff00ff"
    },
    {
      "icon": {
        "path": "images/gainsboro.png"
      },
      "title": "Gainsboro",
      "arg": "gainsboro",
      "hex":"#dcdcdc",
      "text": {
        "copy": "#dcdcdc"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "gainsboro",
          "hex": "gainsboro -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#dcdcdc",
          "hex": "#dcdcdc -> Copy Hex"
        }
      },
      "gainsboro": "#dcdcdc"
    },
    {
      "icon": {
        "path": "images/ghostwhite.png"
      },
      "title": "Ghostwhite",
      "arg": "ghostwhite",
      "hex":"#f8f8ff",
      "text": {
        "copy": "#f8f8ff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "ghostwhite",
          "hex": "ghostwhite -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f8f8ff",
          "hex": "#f8f8ff -> Copy Hex"
        }
      },
      "ghostwhite": "#f8f8ff"
    },
    {
      "icon": {
        "path": "images/gold.png"
      },
      "title": "Gold",
      "arg": "gold",
      "hex":"#ffd700",
      "text": {
        "copy": "#ffd700"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "gold",
          "hex": "gold -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffd700",
          "hex": "#ffd700 -> Copy Hex"
        }
      },
      "gold": "#ffd700"
    },
    {
      "icon": {
        "path": "images/goldenrod.png"
      },
      "title": "Goldenrod",
      "arg": "goldenrod",
      "hex":"#daa520",
      "text": {
        "copy": "#daa520"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "goldenrod",
          "hex": "goldenrod -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#daa520",
          "hex": "#daa520 -> Copy Hex"
        }
      },
      "goldenrod": "#daa520"
    },
    {
      "icon": {
        "path": "images/gray.png"
      },
      "title": "Gray",
      "arg": "gray",
      "hex":"#808080",
      "text": {
        "copy": "#808080"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "gray",
          "hex": "gray -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#808080",
          "hex": "#808080 -> Copy Hex"
        }
      },
      "gray": "#808080"
    },
    {
      "icon": {
        "path": "images/green.png"
      },
      "title": "Green",
      "arg": "green",
      "hex":"#008000",
      "text": {
        "copy": "#008000"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "green",
          "hex": "green -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#008000",
          "hex": "#008000 -> Copy Hex"
        }
      },
      "green": "#008000"
    },
    {
      "icon": {
        "path": "images/greenyellow.png"
      },
      "title": "Greenyellow",
      "arg": "greenyellow",
      "hex":"#adff2f",
      "text": {
        "copy": "#adff2f"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "greenyellow",
          "hex": "greenyellow -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#adff2f",
          "hex": "#adff2f -> Copy Hex"
        }
      },
      "greenyellow": "#adff2f"
    },
    {
      "icon": {
        "path": "images/grey.png"
      },
      "title": "Grey",
      "arg": "grey",
      "hex":"#808080",
      "text": {
        "copy": "#808080"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "grey",
          "hex": "grey -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#808080",
          "hex": "#808080 -> Copy Hex"
        }
      },
      "grey": "#808080"
    },
    {
      "icon": {
        "path": "images/honeydew.png"
      },
      "title": "Honeydew",
      "arg": "honeydew",
      "hex":"#f0fff0",
      "text": {
        "copy": "#f0fff0"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "honeydew",
          "hex": "honeydew -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f0fff0",
          "hex": "#f0fff0 -> Copy Hex"
        }
      },
      "honeydew": "#f0fff0"
    },
    {
      "icon": {
        "path": "images/hotpink.png"
      },
      "title": "Hotpink",
      "arg": "hotpink",
      "hex":"#ff69b4",
      "text": {
        "copy": "#ff69b4"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "hotpink",
          "hex": "hotpink -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff69b4",
          "hex": "#ff69b4 -> Copy Hex"
        }
      },
      "hotpink": "#ff69b4"
    },
    {
      "icon": {
        "path": "images/indianred.png"
      },
      "title": "Indianred",
      "arg": "indianred",
      "hex":"#cd5c5c",
      "text": {
        "copy": "#cd5c5c"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "indianred",
          "hex": "indianred -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#cd5c5c",
          "hex": "#cd5c5c -> Copy Hex"
        }
      },
      "indianred": "#cd5c5c"
    },
    {
      "icon": {
        "path": "images/indigo.png"
      },
      "title": "Indigo",
      "arg": "indigo",
      "hex":"#4b0082",
      "text": {
        "copy": "#4b0082"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "indigo",
          "hex": "indigo -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#4b0082",
          "hex": "#4b0082 -> Copy Hex"
        }
      },
      "indigo": "#4b0082"
    },
    {
      "icon": {
        "path": "images/ivory.png"
      },
      "title": "Ivory",
      "arg": "ivory",
      "hex":"#fffff0",
      "text": {
        "copy": "#fffff0"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "ivory",
          "hex": "ivory -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fffff0",
          "hex": "#fffff0 -> Copy Hex"
        }
      },
      "ivory": "#fffff0"
    },
    {
      "icon": {
        "path": "images/khaki.png"
      },
      "title": "Khaki",
      "arg": "khaki",
      "hex":"#f0e68c",
      "text": {
        "copy": "#f0e68c"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "khaki",
          "hex": "khaki -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f0e68c",
          "hex": "#f0e68c -> Copy Hex"
        }
      },
      "khaki": "#f0e68c"
    },
    {
      "icon": {
        "path": "images/lavender.png"
      },
      "title": "Lavender",
      "arg": "lavender",
      "hex":"#e6e6fa",
      "text": {
        "copy": "#e6e6fa"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lavender",
          "hex": "lavender -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#e6e6fa",
          "hex": "#e6e6fa -> Copy Hex"
        }
      },
      "lavender": "#e6e6fa"
    },
    {
      "icon": {
        "path": "images/lavenderblush.png"
      },
      "title": "Lavenderblush",
      "arg": "lavenderblush",
      "hex":"#fff0f5",
      "text": {
        "copy": "#fff0f5"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lavenderblush",
          "hex": "lavenderblush -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fff0f5",
          "hex": "#fff0f5 -> Copy Hex"
        }
      },
      "lavenderblush": "#fff0f5"
    },
    {
      "icon": {
        "path": "images/lawngreen.png"
      },
      "title": "Lawngreen",
      "arg": "lawngreen",
      "hex":"#7cfc00",
      "text": {
        "copy": "#7cfc00"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lawngreen",
          "hex": "lawngreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#7cfc00",
          "hex": "#7cfc00 -> Copy Hex"
        }
      },
      "lawngreen": "#7cfc00"
    },
    {
      "icon": {
        "path": "images/lemonchiffon.png"
      },
      "title": "Lemonchiffon",
      "arg": "lemonchiffon",
      "hex":"#fffacd",
      "text": {
        "copy": "#fffacd"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lemonchiffon",
          "hex": "lemonchiffon -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fffacd",
          "hex": "#fffacd -> Copy Hex"
        }
      },
      "lemonchiffon": "#fffacd"
    },
    {
      "icon": {
        "path": "images/lightblue.png"
      },
      "title": "Lightblue",
      "arg": "lightblue",
      "hex":"#add8e6",
      "text": {
        "copy": "#add8e6"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightblue",
          "hex": "lightblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#add8e6",
          "hex": "#add8e6 -> Copy Hex"
        }
      },
      "lightblue": "#add8e6"
    },
    {
      "icon": {
        "path": "images/lightcoral.png"
      },
      "title": "Lightcoral",
      "arg": "lightcoral",
      "hex":"#f08080",
      "text": {
        "copy": "#f08080"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightcoral",
          "hex": "lightcoral -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f08080",
          "hex": "#f08080 -> Copy Hex"
        }
      },
      "lightcoral": "#f08080"
    },
    {
      "icon": {
        "path": "images/lightcyan.png"
      },
      "title": "Lightcyan",
      "arg": "lightcyan",
      "hex":"#e0ffff",
      "text": {
        "copy": "#e0ffff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightcyan",
          "hex": "lightcyan -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#e0ffff",
          "hex": "#e0ffff -> Copy Hex"
        }
      },
      "lightcyan": "#e0ffff"
    },
    {
      "icon": {
        "path": "images/lightgoldenrodyellow.png"
      },
      "title": "Lightgoldenrodyellow",
      "arg": "lightgoldenrodyellow",
      "hex":"#fafad2",
      "text": {
        "copy": "#fafad2"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightgoldenrodyellow",
          "hex": "lightgoldenrodyellow -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fafad2",
          "hex": "#fafad2 -> Copy Hex"
        }
      },
      "lightgoldenrodyellow": "#fafad2"
    },
    {
      "icon": {
        "path": "images/lightgray.png"
      },
      "title": "Lightgray",
      "arg": "lightgray",
      "hex":"#d3d3d3",
      "text": {
        "copy": "#d3d3d3"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightgray",
          "hex": "lightgray -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#d3d3d3",
          "hex": "#d3d3d3 -> Copy Hex"
        }
      },
      "lightgray": "#d3d3d3"
    },
    {
      "icon": {
        "path": "images/lightgreen.png"
      },
      "title": "Lightgreen",
      "arg": "lightgreen",
      "hex":"#90ee90",
      "text": {
        "copy": "#90ee90"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightgreen",
          "hex": "lightgreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#90ee90",
          "hex": "#90ee90 -> Copy Hex"
        }
      },
      "lightgreen": "#90ee90"
    },
    {
      "icon": {
        "path": "images/lightgrey.png"
      },
      "title": "Lightgrey",
      "arg": "lightgrey",
      "hex":"#d3d3d3",
      "text": {
        "copy": "#d3d3d3"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightgrey",
          "hex": "lightgrey -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#d3d3d3",
          "hex": "#d3d3d3 -> Copy Hex"
        }
      },
      "lightgrey": "#d3d3d3"
    },
    {
      "icon": {
        "path": "images/lightpink.png"
      },
      "title": "Lightpink",
      "arg": "lightpink",
      "hex":"#ffb6c1",
      "text": {
        "copy": "#ffb6c1"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightpink",
          "hex": "lightpink -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffb6c1",
          "hex": "#ffb6c1 -> Copy Hex"
        }
      },
      "lightpink": "#ffb6c1"
    },
    {
      "icon": {
        "path": "images/lightsalmon.png"
      },
      "title": "Lightsalmon",
      "arg": "lightsalmon",
      "hex":"#ffa07a",
      "text": {
        "copy": "#ffa07a"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightsalmon",
          "hex": "lightsalmon -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffa07a",
          "hex": "#ffa07a -> Copy Hex"
        }
      },
      "lightsalmon": "#ffa07a"
    },
    {
      "icon": {
        "path": "images/lightseagreen.png"
      },
      "title": "Lightseagreen",
      "arg": "lightseagreen",
      "hex":"#20b2aa",
      "text": {
        "copy": "#20b2aa"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightseagreen",
          "hex": "lightseagreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#20b2aa",
          "hex": "#20b2aa -> Copy Hex"
        }
      },
      "lightseagreen": "#20b2aa"
    },
    {
      "icon": {
        "path": "images/lightskyblue.png"
      },
      "title": "Lightskyblue",
      "arg": "lightskyblue",
      "hex":"#87cefa",
      "text": {
        "copy": "#87cefa"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightskyblue",
          "hex": "lightskyblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#87cefa",
          "hex": "#87cefa -> Copy Hex"
        }
      },
      "lightskyblue": "#87cefa"
    },
    {
      "icon": {
        "path": "images/lightslategray.png"
      },
      "title": "Lightslategray",
      "arg": "lightslategray",
      "hex":"#778899",
      "text": {
        "copy": "#778899"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightslategray",
          "hex": "lightslategray -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#778899",
          "hex": "#778899 -> Copy Hex"
        }
      },
      "lightslategray": "#778899"
    },
    {
      "icon": {
        "path": "images/lightslategrey.png"
      },
      "title": "Lightslategrey",
      "arg": "lightslategrey",
      "hex":"#778899",
      "text": {
        "copy": "#778899"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightslategrey",
          "hex": "lightslategrey -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#778899",
          "hex": "#778899 -> Copy Hex"
        }
      },
      "lightslategrey": "#778899"
    },
    {
      "icon": {
        "path": "images/lightsteelblue.png"
      },
      "title": "Lightsteelblue",
      "arg": "lightsteelblue",
      "hex":"#b0c4de",
      "text": {
        "copy": "#b0c4de"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightsteelblue",
          "hex": "lightsteelblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#b0c4de",
          "hex": "#b0c4de -> Copy Hex"
        }
      },
      "lightsteelblue": "#b0c4de"
    },
    {
      "icon": {
        "path": "images/lightyellow.png"
      },
      "title": "Lightyellow",
      "arg": "lightyellow",
      "hex":"#ffffe0",
      "text": {
        "copy": "#ffffe0"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lightyellow",
          "hex": "lightyellow -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffffe0",
          "hex": "#ffffe0 -> Copy Hex"
        }
      },
      "lightyellow": "#ffffe0"
    },
    {
      "icon": {
        "path": "images/lime.png"
      },
      "title": "Lime",
      "arg": "lime",
      "hex":"#00ff00",
      "text": {
        "copy": "#00ff00"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "lime",
          "hex": "lime -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#00ff00",
          "hex": "#00ff00 -> Copy Hex"
        }
      },
      "lime": "#00ff00"
    },
    {
      "icon": {
        "path": "images/limegreen.png"
      },
      "title": "Limegreen",
      "arg": "limegreen",
      "hex":"#32cd32",
      "text": {
        "copy": "#32cd32"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "limegreen",
          "hex": "limegreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#32cd32",
          "hex": "#32cd32 -> Copy Hex"
        }
      },
      "limegreen": "#32cd32"
    },
    {
      "icon": {
        "path": "images/linen.png"
      },
      "title": "Linen",
      "arg": "linen",
      "hex":"#faf0e6",
      "text": {
        "copy": "#faf0e6"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "linen",
          "hex": "linen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#faf0e6",
          "hex": "#faf0e6 -> Copy Hex"
        }
      },
      "linen": "#faf0e6"
    },
    {
      "icon": {
        "path": "images/magenta.png"
      },
      "title": "Magenta",
      "arg": "magenta",
      "hex":"#ff00ff",
      "text": {
        "copy": "#ff00ff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "magenta",
          "hex": "magenta -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff00ff",
          "hex": "#ff00ff -> Copy Hex"
        }
      },
      "magenta": "#ff00ff"
    },
    {
      "icon": {
        "path": "images/maroon.png"
      },
      "title": "Maroon",
      "arg": "maroon",
      "hex":"#800000",
      "text": {
        "copy": "#800000"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "maroon",
          "hex": "maroon -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#800000",
          "hex": "#800000 -> Copy Hex"
        }
      },
      "maroon": "#800000"
    },
    {
      "icon": {
        "path": "images/mediumaquamarine.png"
      },
      "title": "Mediumaquamarine",
      "arg": "mediumaquamarine",
      "hex":"#66cdaa",
      "text": {
        "copy": "#66cdaa"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumaquamarine",
          "hex": "mediumaquamarine -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#66cdaa",
          "hex": "#66cdaa -> Copy Hex"
        }
      },
      "mediumaquamarine": "#66cdaa"
    },
    {
      "icon": {
        "path": "images/mediumblue.png"
      },
      "title": "Mediumblue",
      "arg": "mediumblue",
      "hex":"#0000cd",
      "text": {
        "copy": "#0000cd"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumblue",
          "hex": "mediumblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#0000cd",
          "hex": "#0000cd -> Copy Hex"
        }
      },
      "mediumblue": "#0000cd"
    },
    {
      "icon": {
        "path": "images/mediumorchid.png"
      },
      "title": "Mediumorchid",
      "arg": "mediumorchid",
      "hex":"#ba55d3",
      "text": {
        "copy": "#ba55d3"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumorchid",
          "hex": "mediumorchid -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ba55d3",
          "hex": "#ba55d3 -> Copy Hex"
        }
      },
      "mediumorchid": "#ba55d3"
    },
    {
      "icon": {
        "path": "images/mediumpurple.png"
      },
      "title": "Mediumpurple",
      "arg": "mediumpurple",
      "hex":"#9370db",
      "text": {
        "copy": "#9370db"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumpurple",
          "hex": "mediumpurple -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#9370db",
          "hex": "#9370db -> Copy Hex"
        }
      },
      "mediumpurple": "#9370db"
    },
    {
      "icon": {
        "path": "images/mediumseagreen.png"
      },
      "title": "Mediumseagreen",
      "arg": "mediumseagreen",
      "hex":"#3cb371",
      "text": {
        "copy": "#3cb371"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumseagreen",
          "hex": "mediumseagreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#3cb371",
          "hex": "#3cb371 -> Copy Hex"
        }
      },
      "mediumseagreen": "#3cb371"
    },
    {
      "icon": {
        "path": "images/mediumslateblue.png"
      },
      "title": "Mediumslateblue",
      "arg": "mediumslateblue",
      "hex":"#7b68ee",
      "text": {
        "copy": "#7b68ee"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumslateblue",
          "hex": "mediumslateblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#7b68ee",
          "hex": "#7b68ee -> Copy Hex"
        }
      },
      "mediumslateblue": "#7b68ee"
    },
    {
      "icon": {
        "path": "images/mediumspringgreen.png"
      },
      "title": "Mediumspringgreen",
      "arg": "mediumspringgreen",
      "hex":"#00fa9a",
      "text": {
        "copy": "#00fa9a"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumspringgreen",
          "hex": "mediumspringgreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#00fa9a",
          "hex": "#00fa9a -> Copy Hex"
        }
      },
      "mediumspringgreen": "#00fa9a"
    },
    {
      "icon": {
        "path": "images/mediumturquoise.png"
      },
      "title": "Mediumturquoise",
      "arg": "mediumturquoise",
      "hex":"#48d1cc",
      "text": {
        "copy": "#48d1cc"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumturquoise",
          "hex": "mediumturquoise -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#48d1cc",
          "hex": "#48d1cc -> Copy Hex"
        }
      },
      "mediumturquoise": "#48d1cc"
    },
    {
      "icon": {
        "path": "images/mediumvioletred.png"
      },
      "title": "Mediumvioletred",
      "arg": "mediumvioletred",
      "hex":"#c71585",
      "text": {
        "copy": "#c71585"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mediumvioletred",
          "hex": "mediumvioletred -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#c71585",
          "hex": "#c71585 -> Copy Hex"
        }
      },
      "mediumvioletred": "#c71585"
    },
    {
      "icon": {
        "path": "images/midnightblue.png"
      },
      "title": "Midnightblue",
      "arg": "midnightblue",
      "hex":"#191970",
      "text": {
        "copy": "#191970"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "midnightblue",
          "hex": "midnightblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#191970",
          "hex": "#191970 -> Copy Hex"
        }
      },
      "midnightblue": "#191970"
    },
    {
      "icon": {
        "path": "images/mintcream.png"
      },
      "title": "Mintcream",
      "arg": "mintcream",
      "hex":"#f5fffa",
      "text": {
        "copy": "#f5fffa"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mintcream",
          "hex": "mintcream -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f5fffa",
          "hex": "#f5fffa -> Copy Hex"
        }
      },
      "mintcream": "#f5fffa"
    },
    {
      "icon": {
        "path": "images/mistyrose.png"
      },
      "title": "Mistyrose",
      "arg": "mistyrose",
      "hex":"#ffe4e1",
      "text": {
        "copy": "#ffe4e1"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "mistyrose",
          "hex": "mistyrose -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffe4e1",
          "hex": "#ffe4e1 -> Copy Hex"
        }
      },
      "mistyrose": "#ffe4e1"
    },
    {
      "icon": {
        "path": "images/moccasin.png"
      },
      "title": "Moccasin",
      "arg": "moccasin",
      "hex":"#ffe4b5",
      "text": {
        "copy": "#ffe4b5"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "moccasin",
          "hex": "moccasin -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffe4b5",
          "hex": "#ffe4b5 -> Copy Hex"
        }
      },
      "moccasin": "#ffe4b5"
    },
    {
      "icon": {
        "path": "images/navajowhite.png"
      },
      "title": "Navajowhite",
      "arg": "navajowhite",
      "hex":"#ffdead",
      "text": {
        "copy": "#ffdead"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "navajowhite",
          "hex": "navajowhite -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffdead",
          "hex": "#ffdead -> Copy Hex"
        }
      },
      "navajowhite": "#ffdead"
    },
    {
      "icon": {
        "path": "images/navy.png"
      },
      "title": "Navy",
      "arg": "navy",
      "hex":"#000080",
      "text": {
        "copy": "#000080"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "navy",
          "hex": "navy -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#000080",
          "hex": "#000080 -> Copy Hex"
        }
      },
      "navy": "#000080"
    },
    {
      "icon": {
        "path": "images/oldlace.png"
      },
      "title": "Oldlace",
      "arg": "oldlace",
      "hex":"#fdf5e6",
      "text": {
        "copy": "#fdf5e6"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "oldlace",
          "hex": "oldlace -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fdf5e6",
          "hex": "#fdf5e6 -> Copy Hex"
        }
      },
      "oldlace": "#fdf5e6"
    },
    {
      "icon": {
        "path": "images/olive.png"
      },
      "title": "Olive",
      "arg": "olive",
      "hex":"#808000",
      "text": {
        "copy": "#808000"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "olive",
          "hex": "olive -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#808000",
          "hex": "#808000 -> Copy Hex"
        }
      },
      "olive": "#808000"
    },
    {
      "icon": {
        "path": "images/olivedrab.png"
      },
      "title": "Olivedrab",
      "arg": "olivedrab",
      "hex":"#6b8e23",
      "text": {
        "copy": "#6b8e23"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "olivedrab",
          "hex": "olivedrab -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#6b8e23",
          "hex": "#6b8e23 -> Copy Hex"
        }
      },
      "olivedrab": "#6b8e23"
    },
    {
      "icon": {
        "path": "images/orange.png"
      },
      "title": "Orange",
      "arg": "orange",
      "hex":"#ffa500",
      "text": {
        "copy": "#ffa500"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "orange",
          "hex": "orange -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffa500",
          "hex": "#ffa500 -> Copy Hex"
        }
      },
      "orange": "#ffa500"
    },
    {
      "icon": {
        "path": "images/orangered.png"
      },
      "title": "Orangered",
      "arg": "orangered",
      "hex":"#ff4500",
      "text": {
        "copy": "#ff4500"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "orangered",
          "hex": "orangered -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff4500",
          "hex": "#ff4500 -> Copy Hex"
        }
      },
      "orangered": "#ff4500"
    },
    {
      "icon": {
        "path": "images/orchid.png"
      },
      "title": "Orchid",
      "arg": "orchid",
      "hex":"#da70d6",
      "text": {
        "copy": "#da70d6"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "orchid",
          "hex": "orchid -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#da70d6",
          "hex": "#da70d6 -> Copy Hex"
        }
      },
      "orchid": "#da70d6"
    },
    {
      "icon": {
        "path": "images/palegoldenrod.png"
      },
      "title": "Palegoldenrod",
      "arg": "palegoldenrod",
      "hex":"#eee8aa",
      "text": {
        "copy": "#eee8aa"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "palegoldenrod",
          "hex": "palegoldenrod -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#eee8aa",
          "hex": "#eee8aa -> Copy Hex"
        }
      },
      "palegoldenrod": "#eee8aa"
    },
    {
      "icon": {
        "path": "images/palegreen.png"
      },
      "title": "Palegreen",
      "arg": "palegreen",
      "hex":"#98fb98",
      "text": {
        "copy": "#98fb98"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "palegreen",
          "hex": "palegreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#98fb98",
          "hex": "#98fb98 -> Copy Hex"
        }
      },
      "palegreen": "#98fb98"
    },
    {
      "icon": {
        "path": "images/paleturquoise.png"
      },
      "title": "Paleturquoise",
      "arg": "paleturquoise",
      "hex":"#afeeee",
      "text": {
        "copy": "#afeeee"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "paleturquoise",
          "hex": "paleturquoise -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#afeeee",
          "hex": "#afeeee -> Copy Hex"
        }
      },
      "paleturquoise": "#afeeee"
    },
    {
      "icon": {
        "path": "images/palevioletred.png"
      },
      "title": "Palevioletred",
      "arg": "palevioletred",
      "hex":"#db7093",
      "text": {
        "copy": "#db7093"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "palevioletred",
          "hex": "palevioletred -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#db7093",
          "hex": "#db7093 -> Copy Hex"
        }
      },
      "palevioletred": "#db7093"
    },
    {
      "icon": {
        "path": "images/papayawhip.png"
      },
      "title": "Papayawhip",
      "arg": "papayawhip",
      "hex":"#ffefd5",
      "text": {
        "copy": "#ffefd5"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "papayawhip",
          "hex": "papayawhip -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffefd5",
          "hex": "#ffefd5 -> Copy Hex"
        }
      },
      "papayawhip": "#ffefd5"
    },
    {
      "icon": {
        "path": "images/peachpuff.png"
      },
      "title": "Peachpuff",
      "arg": "peachpuff",
      "hex":"#ffdab9",
      "text": {
        "copy": "#ffdab9"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "peachpuff",
          "hex": "peachpuff -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffdab9",
          "hex": "#ffdab9 -> Copy Hex"
        }
      },
      "peachpuff": "#ffdab9"
    },
    {
      "icon": {
        "path": "images/peru.png"
      },
      "title": "Peru",
      "arg": "peru",
      "hex":"#cd853f",
      "text": {
        "copy": "#cd853f"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "peru",
          "hex": "peru -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#cd853f",
          "hex": "#cd853f -> Copy Hex"
        }
      },
      "peru": "#cd853f"
    },
    {
      "icon": {
        "path": "images/pink.png"
      },
      "title": "Pink",
      "arg": "pink",
      "hex":"#ffc0cb",
      "text": {
        "copy": "#ffc0cb"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "pink",
          "hex": "pink -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffc0cb",
          "hex": "#ffc0cb -> Copy Hex"
        }
      },
      "pink": "#ffc0cb"
    },
    {
      "icon": {
        "path": "images/plum.png"
      },
      "title": "Plum",
      "arg": "plum",
      "hex":"#dda0dd",
      "text": {
        "copy": "#dda0dd"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "plum",
          "hex": "plum -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#dda0dd",
          "hex": "#dda0dd -> Copy Hex"
        }
      },
      "plum": "#dda0dd"
    },
    {
      "icon": {
        "path": "images/powderblue.png"
      },
      "title": "Powderblue",
      "arg": "powderblue",
      "hex":"#b0e0e6",
      "text": {
        "copy": "#b0e0e6"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "powderblue",
          "hex": "powderblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#b0e0e6",
          "hex": "#b0e0e6 -> Copy Hex"
        }
      },
      "powderblue": "#b0e0e6"
    },
    {
      "icon": {
        "path": "images/purple.png"
      },
      "title": "Purple",
      "arg": "purple",
      "hex":"#800080",
      "text": {
        "copy": "#800080"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "purple",
          "hex": "purple -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#800080",
          "hex": "#800080 -> Copy Hex"
        }
      },
      "purple": "#800080"
    },
    {
      "icon": {
        "path": "images/red.png"
      },
      "title": "Red",
      "arg": "red",
      "hex":"#ff0000",
      "text": {
        "copy": "#ff0000"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "red",
          "hex": "red -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff0000",
          "hex": "#ff0000 -> Copy Hex"
        }
      },
      "red": "#ff0000"
    },
    {
      "icon": {
        "path": "images/rosybrown.png"
      },
      "title": "Rosybrown",
      "arg": "rosybrown",
      "hex":"#bc8f8f",
      "text": {
        "copy": "#bc8f8f"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "rosybrown",
          "hex": "rosybrown -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#bc8f8f",
          "hex": "#bc8f8f -> Copy Hex"
        }
      },
      "rosybrown": "#bc8f8f"
    },
    {
      "icon": {
        "path": "images/royalblue.png"
      },
      "title": "Royalblue",
      "arg": "royalblue",
      "hex":"#4169e1",
      "text": {
        "copy": "#4169e1"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "royalblue",
          "hex": "royalblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#4169e1",
          "hex": "#4169e1 -> Copy Hex"
        }
      },
      "royalblue": "#4169e1"
    },
    {
      "icon": {
        "path": "images/saddlebrown.png"
      },
      "title": "Saddlebrown",
      "arg": "saddlebrown",
      "hex":"#8b4513",
      "text": {
        "copy": "#8b4513"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "saddlebrown",
          "hex": "saddlebrown -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#8b4513",
          "hex": "#8b4513 -> Copy Hex"
        }
      },
      "saddlebrown": "#8b4513"
    },
    {
      "icon": {
        "path": "images/salmon.png"
      },
      "title": "Salmon",
      "arg": "salmon",
      "hex":"#fa8072",
      "text": {
        "copy": "#fa8072"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "salmon",
          "hex": "salmon -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fa8072",
          "hex": "#fa8072 -> Copy Hex"
        }
      },
      "salmon": "#fa8072"
    },
    {
      "icon": {
        "path": "images/sandybrown.png"
      },
      "title": "Sandybrown",
      "arg": "sandybrown",
      "hex":"#f4a460",
      "text": {
        "copy": "#f4a460"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "sandybrown",
          "hex": "sandybrown -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f4a460",
          "hex": "#f4a460 -> Copy Hex"
        }
      },
      "sandybrown": "#f4a460"
    },
    {
      "icon": {
        "path": "images/seagreen.png"
      },
      "title": "Seagreen",
      "arg": "seagreen",
      "hex":"#2e8b57",
      "text": {
        "copy": "#2e8b57"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "seagreen",
          "hex": "seagreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#2e8b57",
          "hex": "#2e8b57 -> Copy Hex"
        }
      },
      "seagreen": "#2e8b57"
    },
    {
      "icon": {
        "path": "images/seashell.png"
      },
      "title": "Seashell",
      "arg": "seashell",
      "hex":"#fff5ee",
      "text": {
        "copy": "#fff5ee"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "seashell",
          "hex": "seashell -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fff5ee",
          "hex": "#fff5ee -> Copy Hex"
        }
      },
      "seashell": "#fff5ee"
    },
    {
      "icon": {
        "path": "images/sienna.png"
      },
      "title": "Sienna",
      "arg": "sienna",
      "hex":"#a0522d",
      "text": {
        "copy": "#a0522d"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "sienna",
          "hex": "sienna -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#a0522d",
          "hex": "#a0522d -> Copy Hex"
        }
      },
      "sienna": "#a0522d"
    },
    {
      "icon": {
        "path": "images/silver.png"
      },
      "title": "Silver",
      "arg": "silver",
      "hex":"#c0c0c0",
      "text": {
        "copy": "#c0c0c0"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "silver",
          "hex": "silver -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#c0c0c0",
          "hex": "#c0c0c0 -> Copy Hex"
        }
      },
      "silver": "#c0c0c0"
    },
    {
      "icon": {
        "path": "images/skyblue.png"
      },
      "title": "Skyblue",
      "arg": "skyblue",
      "hex":"#87ceeb",
      "text": {
        "copy": "#87ceeb"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "skyblue",
          "hex": "skyblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#87ceeb",
          "hex": "#87ceeb -> Copy Hex"
        }
      },
      "skyblue": "#87ceeb"
    },
    {
      "icon": {
        "path": "images/slateblue.png"
      },
      "title": "Slateblue",
      "arg": "slateblue",
      "hex":"#6a5acd",
      "text": {
        "copy": "#6a5acd"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "slateblue",
          "hex": "slateblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#6a5acd",
          "hex": "#6a5acd -> Copy Hex"
        }
      },
      "slateblue": "#6a5acd"
    },
    {
      "icon": {
        "path": "images/slategray.png"
      },
      "title": "Slategray",
      "arg": "slategray",
      "hex":"#708090",
      "text": {
        "copy": "#708090"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "slategray",
          "hex": "slategray -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#708090",
          "hex": "#708090 -> Copy Hex"
        }
      },
      "slategray": "#708090"
    },
    {
      "icon": {
        "path": "images/slategrey.png"
      },
      "title": "Slategrey",
      "arg": "slategrey",
      "hex":"#708090",
      "text": {
        "copy": "#708090"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "slategrey",
          "hex": "slategrey -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#708090",
          "hex": "#708090 -> Copy Hex"
        }
      },
      "slategrey": "#708090"
    },
    {
      "icon": {
        "path": "images/snow.png"
      },
      "title": "Snow",
      "arg": "snow",
      "hex":"#fffafa",
      "text": {
        "copy": "#fffafa"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "snow",
          "hex": "snow -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#fffafa",
          "hex": "#fffafa -> Copy Hex"
        }
      },
      "snow": "#fffafa"
    },
    {
      "icon": {
        "path": "images/springgreen.png"
      },
      "title": "Springgreen",
      "arg": "springgreen",
      "hex":"#00ff7f",
      "text": {
        "copy": "#00ff7f"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "springgreen",
          "hex": "springgreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#00ff7f",
          "hex": "#00ff7f -> Copy Hex"
        }
      },
      "springgreen": "#00ff7f"
    },
    {
      "icon": {
        "path": "images/steelblue.png"
      },
      "title": "Steelblue",
      "arg": "steelblue",
      "hex":"#4682b4",
      "text": {
        "copy": "#4682b4"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "steelblue",
          "hex": "steelblue -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#4682b4",
          "hex": "#4682b4 -> Copy Hex"
        }
      },
      "steelblue": "#4682b4"
    },
    {
      "icon": {
        "path": "images/tan.png"
      },
      "title": "Tan",
      "arg": "tan",
      "hex":"#d2b48c",
      "text": {
        "copy": "#d2b48c"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "tan",
          "hex": "tan -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#d2b48c",
          "hex": "#d2b48c -> Copy Hex"
        }
      },
      "tan": "#d2b48c"
    },
    {
      "icon": {
        "path": "images/teal.png"
      },
      "title": "Teal",
      "arg": "teal",
      "hex":"#008080",
      "text": {
        "copy": "#008080"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "teal",
          "hex": "teal -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#008080",
          "hex": "#008080 -> Copy Hex"
        }
      },
      "teal": "#008080"
    },
    {
      "icon": {
        "path": "images/thistle.png"
      },
      "title": "Thistle",
      "arg": "thistle",
      "hex":"#d8bfd8",
      "text": {
        "copy": "#d8bfd8"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "thistle",
          "hex": "thistle -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#d8bfd8",
          "hex": "#d8bfd8 -> Copy Hex"
        }
      },
      "thistle": "#d8bfd8"
    },
    {
      "icon": {
        "path": "images/tomato.png"
      },
      "title": "Tomato",
      "arg": "tomato",
      "hex":"#ff6347",
      "text": {
        "copy": "#ff6347"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "tomato",
          "hex": "tomato -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ff6347",
          "hex": "#ff6347 -> Copy Hex"
        }
      },
      "tomato": "#ff6347"
    },
    {
      "icon": {
        "path": "images/turquoise.png"
      },
      "title": "Turquoise",
      "arg": "turquoise",
      "hex":"#40e0d0",
      "text": {
        "copy": "#40e0d0"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "turquoise",
          "hex": "turquoise -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#40e0d0",
          "hex": "#40e0d0 -> Copy Hex"
        }
      },
      "turquoise": "#40e0d0"
    },
    {
      "icon": {
        "path": "images/violet.png"
      },
      "title": "Violet",
      "arg": "violet",
      "hex":"#ee82ee",
      "text": {
        "copy": "#ee82ee"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "violet",
          "hex": "violet -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ee82ee",
          "hex": "#ee82ee -> Copy Hex"
        }
      },
      "violet": "#ee82ee"
    },
    {
      "icon": {
        "path": "images/wheat.png"
      },
      "title": "Wheat",
      "arg": "wheat",
      "hex":"#f5deb3",
      "text": {
        "copy": "#f5deb3"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "wheat",
          "hex": "wheat -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f5deb3",
          "hex": "#f5deb3 -> Copy Hex"
        }
      },
      "wheat": "#f5deb3"
    },
    {
      "icon": {
        "path": "images/white.png"
      },
      "title": "White",
      "arg": "white",
      "hex":"#ffffff",
      "text": {
        "copy": "#ffffff"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "white",
          "hex": "white -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffffff",
          "hex": "#ffffff -> Copy Hex"
        }
      },
      "white": "#ffffff"
    },
    {
      "icon": {
        "path": "images/whitesmoke.png"
      },
      "title": "Whitesmoke",
      "arg": "whitesmoke",
      "hex":"#f5f5f5",
      "text": {
        "copy": "#f5f5f5"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "whitesmoke",
          "hex": "whitesmoke -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#f5f5f5",
          "hex": "#f5f5f5 -> Copy Hex"
        }
      },
      "whitesmoke": "#f5f5f5"
    },
    {
      "icon": {
        "path": "images/yellow.png"
      },
      "title": "Yellow",
      "arg": "yellow",
      "hex":"#ffff00",
      "text": {
        "copy": "#ffff00"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "yellow",
          "hex": "yellow -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#ffff00",
          "hex": "#ffff00 -> Copy Hex"
        }
      },
      "yellow": "#ffff00"
    },
    {
      "icon": {
        "path": "images/yellowgreen.png"
      },
      "title": "Yellowgreen",
      "arg": "yellowgreen",
      "hex":"#9acd32",
      "text": {
        "copy": "#9acd32"
      },
      "mods": {
        "cmd": {
          "valid": true,
          "arg": "yellowgreen",
          "hex": "yellowgreen -> Copy Name"
        },
        "alt": {
          "valid": true,
          "arg": "#9acd32",
          "hex": "#9acd32 -> Copy Hex"
        }
      },
      "yellowgreen": "#9acd32"
    }
  ]
}