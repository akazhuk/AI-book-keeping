import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supbase'
import Auth from '@/components/Auth'
import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'
import Account from '@/components/Account'
import { useAuth } from '../_layout'

export default function App() {
    const session = useAuth((state: any) => state.session)
  return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}