import { architectureRegistry } from './architectureRegistry';

export interface ArchitectureReportRow {
  blueprint: string;
  owner: string;
  focus: string;
  status: string;
}

export function buildArchitectureReport() {
  const rows: ArchitectureReportRow[] = architectureRegistry.blueprints.map((blueprint) => ({
    blueprint: blueprint.name,
    owner: blueprint.owner,
    focus: blueprint.focus,
    status: blueprint.status,
  }));

  return {
    title: architectureRegistry.repository,
    purpose: architectureRegistry.purpose,
    layers: architectureRegistry.layers,
    standards: architectureRegistry.standards,
    governanceQuestions: architectureRegistry.governanceQuestions,
    decisionRule: architectureRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildArchitectureSummary() {
  return {
    totalBlueprints: architectureRegistry.blueprints.length,
    standardizedBlueprints: architectureRegistry.blueprints.filter(
      (blueprint) => blueprint.status === 'Standardized'
    ).length,
    inReviewBlueprints: architectureRegistry.blueprints.filter((blueprint) => blueprint.status === 'In Review').length,
    plannedBlueprints: architectureRegistry.blueprints.filter((blueprint) => blueprint.status === 'Planned').length,
  };
}
