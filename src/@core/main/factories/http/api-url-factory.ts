export const makeApiUrl = (path: string): string => {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`
}
