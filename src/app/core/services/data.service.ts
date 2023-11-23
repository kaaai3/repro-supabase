import { Injectable } from '@angular/core'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  async getLocations() {
    const boards = await this.supabase.from('fietslocaties').select('*')
    return boards.data || []
  }
}
