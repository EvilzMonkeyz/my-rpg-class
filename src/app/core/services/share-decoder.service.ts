import { Injectable } from '@angular/core';
import { RPGStat } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDecoderService {
  encode(stats: Record<RPGStat, number>): string {
    const jsonStr = JSON.stringify(stats);
    // Base64 encode and make URL safe
    return btoa(jsonStr).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  decode(payload: string): Record<RPGStat, number> | null {
    try {
      // Revert URL safe characters
      let base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) {
        base64 += '=';
      }
      const jsonStr = atob(base64);
      return JSON.parse(jsonStr) as Record<RPGStat, number>;
    } catch (e) {
      console.error('Failed to decode payload', e);
      return null;
    }
  }
}
