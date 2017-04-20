export default function(dateObj) {
  const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  return dateObj.toLocaleDateString('en-US', dateOptions);
}
