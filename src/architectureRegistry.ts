export type ArchitectureLayer = 'Framing' | 'Capability' | 'Structure' | 'Control' | 'Transition';

export type BlueprintStatus = 'Draft' | 'Standardized' | 'In Review' | 'Planned';

export interface BlueprintItem {
  name: string;
  owner: string;
  focus: string;
  status: BlueprintStatus;
}

export interface ArchitectureLayerEntry {
  layer: ArchitectureLayer;
  question: string;
  artifact: string;
}

export interface ArchitectureRegistry {
  repository: string;
  purpose: string;
  layers: ArchitectureLayerEntry[];
  blueprints: BlueprintItem[];
  standards: string[];
  governanceQuestions: string[];
  decisionRule: string;
}

export const architectureRegistry: ArchitectureRegistry = {
  repository: 'Enterprise Architecture Blueprints',
  purpose:
    'Provide reusable blueprints, standards, and governance views for target-state architecture and modernization.',
  layers: [
    {
      layer: 'Framing',
      question: 'Where are we going?',
      artifact: 'Framework overview',
    },
    {
      layer: 'Capability',
      question: 'What must change?',
      artifact: 'Capability maps',
    },
    {
      layer: 'Structure',
      question: 'What should the target look like?',
      artifact: 'Target state architecture',
    },
    {
      layer: 'Control',
      question: 'What standards apply?',
      artifact: 'Cloud architecture standards',
    },
    {
      layer: 'Transition',
      question: 'How do we get there?',
      artifact: 'Modernization roadmap',
    },
  ],
  blueprints: [
    {
      name: 'Hybrid cloud target state',
      owner: 'Enterprise architecture',
      focus: 'Landing zones, integration patterns, operating model fit',
      status: 'Standardized',
    },
    {
      name: 'Business capability map',
      owner: 'Strategy and architecture',
      focus: 'Current and future business capabilities',
      status: 'In Review',
    },
    {
      name: 'Technology capability map',
      owner: 'Platform architecture',
      focus: 'Platforms, services, and delivery constraints',
      status: 'Standardized',
    },
    {
      name: 'Modernization roadmap',
      owner: 'Transformation office',
      focus: 'Sequence and transition milestones',
      status: 'Planned',
    },
  ],
  standards: [
    'Cloud architecture standards',
    'Governance standards',
    'Solution design template',
    'Architecture review template',
  ],
  governanceQuestions: [
    'What should the future state look like?',
    'What standards should guide delivery?',
    'How do we phase the transition responsibly?',
    'Which blueprints are ready for reuse?',
  ],
  decisionRule:
    'If a blueprint cannot guide a decision or sequence work, it should be simplified or folded into a supporting artifact.',
};

export function getArchitectureOverview() {
  return {
    repository: architectureRegistry.repository,
    purpose: architectureRegistry.purpose,
    layerCount: architectureRegistry.layers.length,
    blueprintCount: architectureRegistry.blueprints.length,
    standardizedBlueprints: architectureRegistry.blueprints.filter(
      (blueprint) => blueprint.status === 'Standardized'
    ).length,
  };
}
