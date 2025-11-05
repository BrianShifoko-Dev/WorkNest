import { useState } from "react";
import { Building, Users, Phone, Calendar, Baby, Home } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { SpaceImage } from "../ImageLightbox";
import { Button } from "../ui/button";
import { BookingForm } from "../BookingForm";
import { Badge } from "../ui/badge";

const products = [
  {
    id: 1,
    category: "Private Offices",
    title: "Executive Office",
    description: "Fully furnished private office with premium amenities, perfect for teams of 4-6 people",
    images: [
      { url: "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Office", description: "Modern executive office with premium workspace setup" },
      { url: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjIxNzk0OXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Office", description: "Dedicated private office space with lockable door" },
      { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Office", description: "Luxurious furnishings with executive aesthetic" },
      { url: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MjE3MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Office", description: "High-speed WiFi and advanced tech amenities" },
      { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Office", description: "Meeting area access for client discussions" },
      { url: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDE5NXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Office", description: "Kitchen facilities and common area access" },
      { url: "https://images.unsplash.com/photo-1653972233597-05822baa3c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Office", description: "24/7 secure access with key card entry" },
    ],
    icon: Building,
    pricing: {
      daily: "KES 5,000",
      monthly: "KES 120,000",
      yearly: "KES 1,200,000",
    },
    features: ["High-speed WiFi", "Meeting room access", "Kitchen facilities", "24/7 access"],
  },
  {
    id: 2,
    category: "Private Offices",
    title: "Team Office",
    description: "Spacious office for growing teams up to 10 people with collaborative work areas",
    images: [
      { url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Team Office", description: "Spacious team office for up to 10 people" },
      { url: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Team Office", description: "Collaborative workspace with multiple workstations" },
      { url: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjE5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Team Office", description: "Premium furniture for professional environment" },
      { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Team Office", description: "Video conferencing setup for remote collaboration" },
      { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Team Office", description: "Dedicated phone lines for business communications" },
      { url: "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Team Office", description: "Private entrance for professional image" },
      { url: "https://images.unsplash.com/photo-1653972233597-05822baa3c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Team Office", description: "Custom layout options for your team" },
    ],
    icon: Building,
    pricing: {
      daily: "KES 8,000",
      monthly: "KES 180,000",
      yearly: "KES 1,800,000",
    },
    features: ["Premium furniture", "Video conferencing", "Dedicated phone line", "Private entrance"],
  },
  {
    id: 3,
    category: "Event Spaces",
    title: "Grand Hall",
    description: "Elegant event space perfect for conferences, product launches, and corporate events",
    images: [
      { url: "https://images.unsplash.com/photo-1759873148521-c49d9497cf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwdmVudWV8ZW58MXx8fHwxNzYyMTgyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Grand Hall", description: "Elegant event hall with capacity for 100+ guests" },
      { url: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3NjIyNTAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Grand Hall", description: "Professional AV equipment for presentations" },
      { url: "https://images.unsplash.com/photo-1677078610588-aed2834ad968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjIyNTAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Grand Hall", description: "Stage setup for product launches and keynotes" },
      { url: "https://images.unsplash.com/photo-1613186145425-5bb4eca455d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBib2FyZHJvb218ZW58MXx8fHwxNzYyMTg4OTExfDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Grand Hall", description: "Flexible seating arrangements for various events" },
      { url: "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZHJvb20lMjB0YWJsZSUyMGNoYWlyc3xlbnwxfHx8fDE3NjIyNTAyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Grand Hall", description: "Premium catering services available" },
      { url: "https://images.unsplash.com/photo-1615983234885-918e049a2254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbmZlcmVuY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDIwMXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Grand Hall", description: "Event planning support team available" },
      { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Grand Hall", description: "Premium lighting and sound systems" },
    ],
    icon: Users,
    pricing: {
      daily: "KES 50,000",
      monthly: "N/A",
      yearly: "N/A",
    },
    features: ["Capacity: 100 people", "AV equipment", "Catering services", "Event planning support"],
  },
  {
    id: 4,
    category: "Boardrooms",
    title: "Executive Boardroom",
    description: "Professional meeting room equipped with the latest technology for important presentations",
    images: [
      { url: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2MjIzMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Executive boardroom seating up to 12 people" },
      { url: "https://images.unsplash.com/photo-1677078610588-aed2834ad968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjIyNTAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "4K display screen for presentations" },
      { url: "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZHJvb20lMjB0YWJsZSUyMGNoYWlyc3xlbnwxfHx8fDE3NjIyNTAyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Premium conference table and chairs" },
      { url: "https://images.unsplash.com/photo-1615983234885-918e049a2254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbmZlcmVuY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDIwMXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Conference phone and video system" },
      { url: "https://images.unsplash.com/photo-1613186145425-5bb4eca455d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBib2FyZHJvb218ZW58MXx8fHwxNzYyMTg4OTExfDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Whiteboard and presentation tools" },
      { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Professional lighting and ambiance" },
      { url: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjByb29tfGVufDF8fHx8MTc2MjI1MDE5NXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Executive Boardroom", description: "Stunning views and natural light" },
    ],
    icon: Home,
    pricing: {
      daily: "KES 3,000",
      monthly: "KES 60,000",
      yearly: "KES 600,000",
    },
    features: ["Seats 12", "4K display", "Conference phone", "Whiteboard"],
  },
  {
    id: 5,
    category: "Telephone Booths",
    title: "Private Call Booth",
    description: "Soundproof booth for private calls and focused work sessions",
    images: [
      { url: "https://images.unsplash.com/photo-1716703435698-031227389c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWxlcGhvbmUlMjBib290aHxlbnwxfHx8fDE3NjIyMzM2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Call Booth", description: "Soundproof telephone booth for privacy" },
      { url: "https://images.unsplash.com/photo-1756480546565-5bfd1d4852cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGJvb3RoJTIwcG9kfGVufDF8fHx8MTc2MjI1MDIwMXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Call Booth", description: "Modern pod design for focused work" },
      { url: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjIxNzk0OXww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Call Booth", description: "High-speed internet connectivity inside" },
      { url: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MjE3MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Call Booth", description: "Power outlets and USB charging ports" },
      { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Call Booth", description: "Comfortable seating for extended calls" },
      { url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Call Booth", description: "Ventilation system for comfort" },
      { url: "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Private Call Booth", description: "Easy booking and instant availability" },
    ],
    icon: Phone,
    pricing: {
      daily: "KES 500",
      monthly: "KES 10,000",
      yearly: "KES 100,000",
    },
    features: ["Soundproof", "High-speed internet", "Power outlets", "Comfortable seating"],
  },
  {
    id: 6,
    category: "Kids Space",
    title: "Children's Play Area",
    description: "Safe and supervised play area for working parents",
    images: [
      { url: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Children's Play Area", description: "Bright and colorful kids zone with supervision" },
      { url: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjE5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Children's Play Area", description: "Supervised care by trained staff" },
      { url: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MjE3MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Children's Play Area", description: "Educational toys and learning materials" },
      { url: "https://images.unsplash.com/photo-1610387819413-f88dec15dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwc3BhY2V8ZW58MXx8fHwxNzYyMjUwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Children's Play Area", description: "Safe and secure environment" },
      { url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Children's Play Area", description: "Healthy snacks and refreshments provided" },
      { url: "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Children's Play Area", description: "Age-appropriate activities and games" },
      { url: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNTAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Children's Play Area", description: "Close to workspace for peace of mind" },
    ],
    icon: Baby,
    pricing: {
      daily: "KES 1,500",
      monthly: "KES 30,000",
      yearly: "KES 300,000",
    },
    features: ["Supervised care", "Educational toys", "Safe environment", "Snacks provided"],
  },
];

export function ProductsBook() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const categories = ["All", "Private Offices", "Event Spaces", "Boardrooms", "Telephone Booths", "Kids Space"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5C4033] to-[#4A3329] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4">Our Products & Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our range of premium workspace solutions designed to meet your every need
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
                    : "border-[#5C4033]/20 text-[#5C4033] hover:bg-[#D4AF37]/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16" data-section="products">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#5C4033]/10"
                data-type={product.category.toLowerCase().replace(" ", "-")}
              >
                <div className="h-56 overflow-hidden relative">
                  <SpaceImage
                    src={product.images[0].url}
                    alt={product.title}
                    title={product.title}
                    description={product.description}
                    allImages={product.images}
                    className="h-full"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-[#5C4033] z-10 pointer-events-none">
                    {product.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <product.icon className="w-6 h-6 text-[#D4AF37]" />
                    <h3 className="text-[#5C4033]">{product.title}</h3>
                  </div>
                  <p className="text-sm text-[#5C4033]/70 mb-4">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-[#5C4033]/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="border-t border-[#5C4033]/10 pt-4 mb-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-xs text-[#5C4033]/60 mb-1">Daily</p>
                        <p className="text-sm text-[#5C4033]">{product.pricing.daily}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#5C4033]/60 mb-1">Monthly</p>
                        <p className="text-sm text-[#5C4033]">{product.pricing.monthly}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#5C4033]/60 mb-1">Yearly</p>
                        <p className="text-sm text-[#5C4033]">{product.pricing.yearly}</p>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
                        onClick={() => setSelectedProduct(product)}
                      >
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-[#5C4033]">
                          Book {selectedProduct?.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <BookingForm variant="full" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 p-8 rounded-lg border border-[#D4AF37]/20">
            <h3 className="text-[#5C4033] mb-4 text-center">Payment Methods</h3>
            <p className="text-center text-[#5C4033]/70 mb-6">
              We accept various payment methods for your convenience
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-payment="mpesa">
              {["M-PESA", "Bank Transfer", "Card Payment", "PayPal"].map((method) => (
                <div
                  key={method}
                  className="bg-white p-4 rounded-lg text-center border border-[#5C4033]/10"
                >
                  <p className="text-sm text-[#5C4033]">{method}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
