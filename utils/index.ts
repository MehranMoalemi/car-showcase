export function classCombiner(classes: (string | undefined)[]): string {
    let combinedStyle = classes.join("").trim();
    return combinedStyle;
  }