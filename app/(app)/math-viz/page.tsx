"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Play, Code, Download, Loader } from 'lucide-react'

export default function MathVisualizationPage() {
  const [isRendering, setIsRendering] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [sceneCode, setSceneCode] = useState(`from manim import *

class CustomScene(Scene):
    def construct(self):
        # Create a simple parabola (LaTeX-free)
        axes = Axes(
            x_range=[-3, 3],
            y_range=[-1, 9],
            axis_config={"color": BLUE},
            tips=False  # Disable tips to avoid LaTeX
        )
        
        parabola = axes.plot(lambda x: x**2, color=YELLOW)
        
        # Add simple text title
        title = Text("y = x²", font_size=36).to_edge(UP)
        
        # Animate the creation
        self.play(Write(title))
        self.play(Create(axes))
        self.play(Create(parabola))
        self.wait(2)`)

  const [sceneName, setSceneName] = useState('CustomScene')

  const preRenderedScenes = [
    {
      name: 'Parabola Function',
      description: 'Interactive quadratic function with moving point',
      videoUrl: '/animations/parabola.mp4',
      thumbnail: '/images/math/parabola-thumb.png'
    },
    {
      name: 'Circle Area',
      description: 'Sector-based visualization of circle area calculation',
      videoUrl: '/animations/circle-area.mp4',
      thumbnail: '/images/math/circle-thumb.png'
    },
    {
      name: 'Sine Wave',
      description: 'Connection between unit circle and sine function',
      videoUrl: '/animations/fourier.mp4',
      thumbnail: '/images/math/sine-thumb.png'
    }
  ]

  const handleRenderDynamic = async () => {
    setIsRendering(true)
    try {
      const response = await fetch('/api/render', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sceneName,
          sceneCode
        })
      })

      if (response.ok) {
        const blob = await response.blob()
        const videoUrl = URL.createObjectURL(blob)
        setCurrentVideo(videoUrl)
      } else {
        const error = await response.json()
        alert(`Rendering failed: ${error.error}`)
      }
    } catch (error) {
      alert(`Network error: ${error}`)
    } finally {
      setIsRendering(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Math Visualization</h1>
          <p className="text-gray-600 text-lg">
            Explore mathematical concepts through 3Blue1Brown-style animations powered by Manim
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pre-rendered Animations */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-blue-600" />
                  Pre-rendered Animations
                </CardTitle>
                <CardDescription>
                  High-quality mathematical animations ready to explore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {preRenderedScenes.map((scene, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{scene.name}</h3>
                        <Badge variant="secondary">Ready</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{scene.description}</p>
                      <div className="bg-gray-100 rounded aspect-video flex items-center justify-center mb-3">
                        <video 
                          src={scene.videoUrl} 
                          controls 
                          className="w-full h-full object-contain rounded"
                          poster={scene.thumbnail}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Code className="w-4 h-4 mr-1" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dynamic Scene Creator */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600" />
                  Dynamic Scene Creator
                </CardTitle>
                <CardDescription>
                  Write custom Manim code and render your own animations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Scene Name
                  </label>
                  <input
                    type="text"
                    value={sceneName}
                    onChange={(e) => setSceneName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., CustomScene"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Manim Code
                  </label>
                  <Textarea
                    value={sceneCode}
                    onChange={(e) => setSceneCode(e.target.value)}
                    className="font-mono text-sm min-h-[300px]"
                    placeholder="Enter your Manim scene code here..."
                  />
                </div>

                <Button 
                  onClick={handleRenderDynamic}
                  disabled={isRendering || !sceneName.trim() || !sceneCode.trim()}
                  className="w-full"
                >
                  {isRendering ? (
                    <>
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                      Rendering Animation...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Render Animation
                    </>
                  )}
                </Button>

                {currentVideo && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Your Animation</h3>
                    <div className="bg-gray-100 rounded aspect-video">
                      <video 
                        src={currentVideo} 
                        controls 
                        className="w-full h-full object-contain rounded"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}

                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Safety Guidelines</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Only use Manim core modules (no file system access)</li>
                    <li>• Code size limit: 5KB</li>
                    <li>• Rendering timeout: 20 seconds</li>
                    <li>• Scene must inherit from manim.Scene</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}