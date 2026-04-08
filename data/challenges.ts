import { Challenge } from '../types/challenge';

export const CHALLENGES: Challenge[] = [
  {
    id: 'leading-lines',
    title: 'Leading Lines',
    description: "Use lines in the scene to draw the viewer's eye toward your subject.",
    tips: [
      'Look for roads, fences, rivers, or shadows that point inward.',
      'Position the line to enter from a bottom corner.',
      'Strong diagonal lines create more energy than horizontal ones.',
    ],
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    description: 'Capture the warm, diffused light in the first or last hour of sunlight.',
    tips: [
      'Arrive 15 minutes early to scout your composition.',
      'Shoot toward the light for dramatic silhouettes.',
      'Use spot metering on your subject to avoid overexposure.',
    ],
  },
  {
    id: 'rule-of-thirds',
    title: 'Rule of Thirds',
    description: 'Place your subject off-center using the grid intersections as anchors.',
    tips: [
      "Enable your camera's grid overlay before shooting.",
      'Place horizons on the top or bottom third, not the middle.',
      'Leave negative space in the direction your subject faces.',
    ],
  },
  {
    id: 'reflections',
    title: 'Reflections',
    description: 'Find a mirror-like surface to create a symmetric or abstract composition.',
    tips: [
      'Look for still water, wet pavement, or glass surfaces.',
      'Get low to include both the subject and its reflection.',
      'Use a small aperture for sharp depth throughout the frame.',
    ],
  },
  {
    id: 'silhouette',
    title: 'Silhouette',
    description: 'Expose for the background to turn your subject into a bold dark shape.',
    tips: [
      'Shoot into a bright light source such as a window or sunset.',
      'Use spot metering on the bright area behind your subject.',
      "Keep the subject's profile clean and instantly recognizable.",
    ],
  },
];
