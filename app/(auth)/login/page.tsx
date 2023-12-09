import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GithubIcon } from '@/node_modules/lucide-react/dist/lucide-react'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import React from 'react'

export default function Login() {
  return (
    <div className="mt-24  rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
    <form>
      <h1 className="text-3xl font-semibold text-white">Login</h1>
      <div className="space-y-4 mt-5">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
        />
        <Button
          type="submit"
          variant="destructive"
          className="w-full bg-[#e50914]"
        >
          Login
        </Button>
      </div>
    </form>
    <div className="text-gray-500 text-sm mt-2">
      New To Netflix? {" "}
      <Link className="text-white hover:underline" href="/sign-up">
        Sign Up
      </Link>
    </div>
    
  </div>
  )
}
