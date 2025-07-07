export function formatTime(milliseconds: bigint): string {
  let seconds = milliseconds / 1000n;
  let minutes = seconds / 60n;
  seconds = seconds % 60n;
  let hours = minutes / 60n;
  minutes = minutes % 60n;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}
