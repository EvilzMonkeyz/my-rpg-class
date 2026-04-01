import { Injectable } from '@angular/core';
import { RPGStat } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class ShareDecoderService {
  // Define a strict mathematical order.
  private static readonly STAT_ORDER: RPGStat[] = ['STR', 'INT', 'AGI', 'WIS', 'DEX', 'CHA'];

  encode(stats: Record<RPGStat, number>): string {
    // Convert to Unix Timestamp in Base36 (creates a random-looking string like "lw4x9qp")
    const timeSalt = Date.now().toString(36);

    // Each stat has a max of 18, so it cleanly translates to a single Base36 character (0-9, a-i).
    // This creates an exact 6-character encoded string like "227331" or "a2b001"
    const packedStats = ShareDecoderService.STAT_ORDER.map((stat) =>
      (stats[stat] || 0).toString(36),
    ).join('');

    // We reverse the packed stats just for additional obfuscation and append them to the end of the timestamp
    const concealedStats = packedStats.split('').reverse().join('');

    // E.g. output: "lw4x9qpa10b2a"
    return `${timeSalt}${concealedStats}`;
  }

  decode(payload: string): Record<RPGStat, number> | null {
    try {
      // Must have at least 1 char of time and exactly 6 chars of stats
      if (!payload || payload.length < 7) return null;

      // Extract the last 6 characters (the concealed stats)
      const concealedStats = payload.slice(-6);

      // Un-reverse it
      const packedStats = concealedStats.split('').reverse().join('');

      const stats: Partial<Record<RPGStat, number>> = {};

      for (let i = 0; i < ShareDecoderService.STAT_ORDER.length; i++) {
        const statName = ShareDecoderService.STAT_ORDER[i];

        // Parse the single base36 character back to an integer
        const value = parseInt(packedStats[i], 36);

        if (isNaN(value)) return null;
        stats[statName] = value;
      }

      return stats as Record<RPGStat, number>;
    } catch (e) {
      console.error('Failed to decode payload', e);
      return null;
    }
  }
}
