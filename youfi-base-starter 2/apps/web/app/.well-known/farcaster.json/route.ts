import { NextResponse } from 'next/server'

export async function GET() {
  const accountAssociation = {
    header: process.env.FARCASTER_HEADER,
    payload: process.env.FARCASTER_PAYLOAD,
    signature: process.env.FARCASTER_SIGNATURE,
  }

  const manifest = {
    accountAssociation,
    // ajuste os campos adicionais conforme docs do Base App / Farcaster
    // noindex: true durante testes
    noindex: true,
    name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || 'YouFi',
    icon: process.env.NEXT_PUBLIC_ICON_URL || '',
    url: process.env.NEXT_PUBLIC_URL || '',
  }

  return NextResponse.json(manifest, { status: 200 })
}
