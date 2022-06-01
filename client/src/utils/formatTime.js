export default function formatTime(date) {
  return new Intl.DateTimeFormat('en', {
    timeStyle: 'short',
  }).format(new Date(date));
}
