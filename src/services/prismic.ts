import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const apiEndpoint = 'https://resume-patrick.prismic.io/api/v2';
  const prismic = Prismic.client(apiEndpoint, { req })
  return prismic;
}
