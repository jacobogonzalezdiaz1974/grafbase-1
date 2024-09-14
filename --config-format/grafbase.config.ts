
import { graph, config } from '@grafbase/sdk';

// Definir el modelo 'User'
const User = graph.Standalone.prototype.object('User', {
  fields: {
    name: { type: 'string', minLength: 2, maxLength: 20 },
    email: { type: 'string', unique: true },
    avatarUrl: { type: 'url' },
    description: { type: 'string' },
    githubUrl: { type: 'url', optional: true },
    linkedinUrl: { type: 'url', optional: true },
    projects: { type: 'relation', target: 'Project', multiple: true } // Relación con múltiples proyectos
  }
});

// Definir el modelo 'Project'
const Project = graph.Standalone.prototype.object('Project', {
  fields: {
    title: { type: 'string', minLength: 2, maxLength: 50 },
    description: { type: 'string' },
    githubUrl: { type: 'url', optional: true },
    liveSiteUrl: { type: 'url', optional: true },
    user: { type: 'relation', target: 'User' } // Relación inversa con 'User'
  }
});

// Exportar la configuración del esquema
export default config({
  graph: graph.Standalone.prototype.object() // Usar 'Graph.Standalone()' directamente para definir el esquema
});


