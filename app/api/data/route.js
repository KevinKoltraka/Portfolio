import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'API operational',
    data: {
      version: '1.0.0',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    }
  }, { 
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60',
      'X-Content-Type-Options': 'nosniff'
    }
  });
};