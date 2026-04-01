import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RPGStat } from '../models/quiz.model'; // ปรับ path ให้ตรงกับโปรเจกต์ของคุณ

@Injectable({
  providedIn: 'root'
})
export class ShareDecoderService {
  // ดึง PLATFORM_ID มาเพื่อเช็คว่าโค้ดกำลังรันบน Browser หรือ Server (Vercel)
  private platformId = inject(PLATFORM_ID);

  encode(stats: Record<RPGStat, number>): string {
    const jsonStr = JSON.stringify(stats);

    // เข้ารหัสแบบปลอดภัยทั้งฝั่ง Browser และ SSR
    const base64 = isPlatformBrowser(this.platformId)
      ? btoa(jsonStr)
      : Buffer.from(jsonStr).toString('base64');

    // แปลงเป็น URL Safe Base64
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  decode(payload: string): Record<RPGStat, number> | null {
    try {
      // Revert URL safe characters
      let base64 = payload.replace(/-/g, '+').replace(/_/g, '/');

      // เติม Padding '=' กลับเข้าไปให้หาร 4 ลงตัว
      while (base64.length % 4) {
        base64 += '=';
      }

      // ถอดรหัสแบบปลอดภัยทั้งฝั่ง Browser และ SSR
      const jsonStr = isPlatformBrowser(this.platformId)
        ? atob(base64)
        : Buffer.from(base64, 'base64').toString('utf-8');

      return JSON.parse(jsonStr) as Record<RPGStat, number>;
    } catch (e) {
      console.error('Failed to decode payload', e);
      return null;
    }
  }
}