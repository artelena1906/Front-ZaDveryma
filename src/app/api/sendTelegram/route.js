import { NextResponse } from 'next/server';

export async function POST(req) {
  const { message } = await req.json();
  const botToken = '7298657890:AAF-UGA0DRID9qM6QHt9TIFCbomtVMn1sCc'; // Замените на ваш токен бота
  const chatId = '527548330'; // Замените на ваш chat_id

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 });
  }
}