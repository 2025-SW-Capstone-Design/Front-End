export function formatKoreanDateTime(isoString: string): string {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0-indexed
  const day = date.getDate() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}
