import { Injectable } from '@angular/core';

import { createClient } from '@sanity/client';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  private client = createClient({
    projectId: 'ox1vdxwn',
    dataset: 'production',
    apiVersion: '2022-03-07',
  })

  getClient() {
    return this.client;
  }
}
