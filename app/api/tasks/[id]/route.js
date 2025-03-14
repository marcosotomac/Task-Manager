import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";
export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  console.log(task);
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const content = await request.json(); 
  const updatedTask = await prisma.task.update({
    where: {
      id: parseInt(params.id),
    },
    data: content,
  });

  return NextResponse.json(updatedTask);
}

export async function DELETE(request, { params }) {
  try {
    const delete_task = await prisma.task.delete({
      where: {
        id: parseInt(params.id),
      },
    });

    return NextResponse.json(delete_task);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
