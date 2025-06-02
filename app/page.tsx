import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Heart, Globe, Search, Upload, Github, Twitter, Linkedin, Facebook, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GoWithFundLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-[#0e2d2f] glow-text mr-2" />
              <span className="text-xl font-bold text-[#0e2d2f] glow-text">GoWithFund.org</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link 
                href="#" 
                className="relative group text-[#0e2d2f] hover:text-[#020D19] transition-colors duration-300 font-medium"
              >
                Browse Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0e2d2f] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#" 
                className="relative group text-[#0e2d2f] hover:text-[#020D19] transition-colors duration-300 font-medium"
              >
                For Nonprofits
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0e2d2f] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Contribute (Developers)
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-[#0e2d2f] text-[#0e2d2f] hover:bg-[#0e2d2f] hover:text-white transition-all duration-300"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0e2d2f]/10 via-white to-[#020D19]/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#0e2d2f] leading-tight glow-text">
                Empowering Change:
                <span className="text-[#020D19]"> Connecting Resources</span> to Global Needs
              </h1>
              <p className="text-xl text-[#0e2d2f]/80 leading-relaxed">
                GoWithFund.org offers a platform for nonprofits and underserved communities to fund vital projects in
                education, healthcare, and social development worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#0e2d2f] hover:bg-[#020D19] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 glow hover:glow"
                >
                  Browse Projects
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-[#0e2d2f] text-[#0e2d2f] hover:bg-[#0e2d2f] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Submit a Project
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Diverse hands working together for global impact"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bridging the Gap to a Brighter Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects those who need support with those who can provide it, creating lasting positive
              impact worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Nonprofits Share Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Organizations submit projects needing support in education, healthcare, or social development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Supporters Discover & Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Individuals and groups find and contribute to causes they care about.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Real-World Impact Delivered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Funded projects create tangible improvements in communities worldwide.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Projects You Can Support Today</h2>
            <p className="text-xl text-gray-600">Make a direct impact on communities around the world</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Clean water project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-blue-100 text-blue-800">Education</Badge>
                </div>
                <CardTitle className="text-xl font-bold">Clean Water for Rural Schools</CardTitle>
                <CardDescription>
                  Providing clean drinking water access to 500 students in remote villages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">$12,500 / $25,000</span>
                  </div>
                  <Progress value={50} className="h-2" />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More & Donate</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Healthcare project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-green-100 text-green-800">Healthcare</Badge>
                </div>
                <CardTitle className="text-xl font-bold">Mobile Health Clinic</CardTitle>
                <CardDescription>
                  Bringing essential medical care to underserved communities in rural areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">$8,200 / $15,000</span>
                  </div>
                  <Progress value={55} className="h-2" />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More & Donate</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Education project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-purple-100 text-purple-800">Social Development</Badge>
                </div>
                <CardTitle className="text-xl font-bold">Digital Literacy Program</CardTitle>
                <CardDescription>Teaching computer skills to youth in developing communities.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">$18,750 / $20,000</span>
                  </div>
                  <Progress value={94} className="h-2" />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More & Donate</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Build With Us: <span className="text-blue-400">Code for Impact</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                GoWithFund.org is being built as an open-source platform. Your development skills can directly help us
                connect resources to critical global needs.
              </p>
              <p className="text-lg text-gray-300">
                Contribute to our codebase, help shape the future of charitable funding, and make a tangible difference.
                Plus, get an exclusive GoWithFund.org contributor t-shirt for your first merged pull request!
              </p>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400">gowithfund.org</span>
                </div>
                <div className="space-y-2 text-green-400">
                  <div>{"git clone https://github.com/gowithfund/platform.git"}</div>
                  <div>{"npm install"}</div>
                  <div>{"npm run dev"}</div>
                  <div className="text-blue-400">{"// Start making an impact! 🚀"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of supporters who are creating positive change around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
            >
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">GoWithFund.org</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Organized exclusively for charitable and educational purposes. Connecting resources to global needs and
                empowering positive change worldwide.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-300">contact@gowithfund.org</p>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GoWithFund Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
