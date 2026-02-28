"use server"

import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "../prisma"

export async function getAppointments() {
    try {
        const user = await currentUser()
        const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase()
        const userEmail = user?.emailAddresses
            ?.map((e) => e.emailAddress.toLowerCase())
            .find((email) => email === adminEmail)

        if (!user || !adminEmail || !userEmail) {
            throw new Error("Unauthorized")
        }
        const appointments = await prisma.appointment.findMany({
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true
                    }
                },
                doctor: {
                    select: {
                        name: true,
                        imageUrl: true
                    }
                }
            },
            orderBy: { createdAt: "desc" }
        })

        return appointments
    } catch (error) {
        console.error("Error fetching appointments:", error);
        throw new Error("Failed to fetch appointments")
    }
}