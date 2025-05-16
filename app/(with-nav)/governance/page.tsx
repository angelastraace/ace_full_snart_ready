import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, Users, Vote, BarChart3 } from "lucide-react"

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-[#0b0c2a] text-white px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#001ace] to-[#9D50BB] text-transparent bg-clip-text mb-4">
            ACE Governance
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
            Shape the future of ACE Exchange through community-driven proposals, voting, and transparent
            decision-making.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f9d423] mb-2">24</div>
                <div className="text-lg text-gray-300">Active Proposals</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f9d423] mb-2">68.5M</div>
                <div className="text-lg text-gray-300">ACE Tokens Staked</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f9d423] mb-2">12.4K</div>
                <div className="text-lg text-gray-300">Active Voters</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="proposals" className="mb-12">
          <TabsList className="grid grid-cols-4 bg-black/20 border border-[#001ace]/30 p-1 rounded-lg">
            <TabsTrigger value="proposals" className="data-[state=active]:bg-[#001ace] data-[state=active]:text-white">
              Proposals
            </TabsTrigger>
            <TabsTrigger value="voting" className="data-[state=active]:bg-[#001ace] data-[state=active]:text-white">
              Voting
            </TabsTrigger>
            <TabsTrigger value="delegates" className="data-[state=active]:bg-[#001ace] data-[state=active]:text-white">
              Delegates
            </TabsTrigger>
            <TabsTrigger value="treasury" className="data-[state=active]:bg-[#001ace] data-[state=active]:text-white">
              Treasury
            </TabsTrigger>
          </TabsList>

          <TabsContent value="proposals" className="mt-6">
            <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Active Proposals</h2>
                  <Button className="bg-[#001ace] hover:bg-[#001ace]/80">Create Proposal</Button>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="border border-[#001ace]/30 rounded-lg p-4 hover:bg-[#001ace]/10 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-[#f9d423]">
                            AIP-{i + 42}: Enhance Staking Rewards
                          </h3>
                          <p className="text-sm text-gray-400">Proposed by: 0x1a2b...3c4d • 3 days ago</p>
                        </div>
                        <div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">Active</div>
                      </div>
                      <p className="text-gray-300 mb-3">
                        This proposal aims to increase staking rewards by 2% for long-term holders to incentivize
                        platform stability.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#001ace] to-[#9D50BB]"
                              style={{ width: `${65 + i * 5}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-400">{65 + i * 5}% in favor</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[#9D50BB] hover:text-[#9D50BB]/80">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <Button variant="link" className="text-[#9D50BB]">
                    View All Proposals
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="voting" className="mt-6">
            <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Your Voting Power</h2>

                <div className="bg-black/40 rounded-lg p-6 mb-6">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <div>
                      <p className="text-gray-400 mb-1">Available Voting Power</p>
                      <p className="text-2xl font-bold">0 ACE</p>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-[#001ace] hover:bg-[#001ace]/80">Stake to Vote</Button>
                  </div>
                  <p className="text-sm text-gray-400">
                    Stake your ACE tokens to participate in governance. 1 ACE = 1 vote.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4">Recent Votes</h3>
                <p className="text-gray-400">
                  You haven't voted on any proposals yet. Stake ACE tokens to start participating in governance.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delegates" className="mt-6">
            <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Top Delegates</h2>

                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between items-center border-b border-[#001ace]/20 pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#001ace] to-[#9D50BB] flex items-center justify-center text-white font-bold mr-3">
                          {i}
                        </div>
                        <div>
                          <p className="font-semibold">Delegate {i}</p>
                          <p className="text-sm text-gray-400">0x{i}a2b...3c4d</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{(10 - i) * 1.5}M ACE</p>
                        <p className="text-sm text-gray-400">{(10 - i) * 2}% of votes</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full border-[#001ace] text-[#001ace] hover:bg-[#001ace]/10">
                    Become a Delegate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="treasury" className="mt-6">
            <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Treasury Overview</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-black/40 rounded-lg p-4">
                    <p className="text-gray-400 mb-1">Total Treasury Value</p>
                    <p className="text-2xl font-bold">$42,568,921</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4">
                    <p className="text-gray-400 mb-1">Monthly Spending</p>
                    <p className="text-2xl font-bold">$356,780</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Treasury Allocation</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Development</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#001ace]" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Marketing</span>
                      <span>25%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#9D50BB]" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Liquidity</span>
                      <span>20%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f9d423]" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Community</span>
                      <span>10%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Governance Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#001ace]/20 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#001ace]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proposals</h3>
                <p className="text-gray-400">Create and submit proposals to improve the ACE ecosystem</p>
              </CardContent>
            </Card>
            <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#001ace]/20 flex items-center justify-center mb-4">
                  <Vote className="h-6 w-6 text-[#001ace]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Voting</h3>
                <p className="text-gray-400">Cast your votes on active proposals using staked ACE tokens</p>
              </CardContent>
            </Card>
            <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#001ace]/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#001ace]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Delegation</h3>
                <p className="text-gray-400">Delegate your voting power to trusted community members</p>
              </CardContent>
            </Card>
            <Card className="bg-black/30 border border-[#001ace]/30 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#001ace]/20 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-[#001ace]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-gray-400">Track proposal outcomes and governance metrics</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to participate?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Join the ACE community and help shape the future of decentralized finance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#001ace] hover:bg-[#001ace]/80">Connect Wallet</Button>
            <Link href="/support/governance">
              <Button variant="outline" className="border-[#001ace] text-[#001ace] hover:bg-[#001ace]/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
