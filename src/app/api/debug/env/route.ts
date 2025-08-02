import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Only allow in development
    if (process.env.NODE_ENV !== 'development') {
        return NextResponse.json({ error: 'Not available in production' }, { status: 403 });
    }

    const envCheck = {
        NODE_ENV: process.env.NODE_ENV,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        AUTH_SECRET: process.env.AUTH_SECRET ? '✓ Set' : '✗ Missing',
        AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID ? '✓ Set' : '✗ Missing',
        AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET ? '✓ Set' : '✗ Missing',
        AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID ? '✓ Set' : '✗ Missing',
        AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET ? '✓ Set' : '✗ Missing',
    };

    return NextResponse.json(envCheck);
}
