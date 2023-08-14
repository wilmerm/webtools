

export function intcomma(num: number | string, decimal_places: number = 2) {
  if (typeof num === 'string') {
    try {
      num = parseFloat(num);
    } catch (error) {
      return "";
    }
  }

  if (isNaN(num)) {
    return "";
  }

  let num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (num_parts[1] != undefined) {
    try {
      num_parts[1] = num_parts[1].slice(0, decimal_places);
    } catch (error) {
      console.warn(error);
    }
  }

  return num_parts.join(".");
}