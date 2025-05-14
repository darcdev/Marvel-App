import { Injectable } from '@angular/core';
import variablesConfig from '@app/core/config/variables';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      variablesConfig.supabaseUrl,
      variablesConfig.supabaseKey
    );
  }
}
