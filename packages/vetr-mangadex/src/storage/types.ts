export interface MangadexStorage {
  get(key: string): Promise<string>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
  getTokens(): Promise<{session?: string; refresh?: string}>;
}
