import { Injectable } from '@angular/core';

import { createClient } from '@sanity/client';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  private client = createClient({
    projectId: 'enggryq3',
    dataset: 'production',
    apiVersion: '2022-03-07',
  })

  getClient() {
    return this.client;
  }
}
