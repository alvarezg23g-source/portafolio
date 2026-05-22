import {
  CheckCircle2,
  ExternalLink,
  Github,
  Globe2,
  Network,
  RadioTower,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { projects } from '../data/portfolio.js';

const infrastructureHighlights = [
  {
    icon: Server,
    title: 'DNS activo',
    command: 'systemctl status named',
    label: 'BIND9 running',
    detail:
      'Servidor DNS encendido y resolviendo por IPv4. Los avisos IPv6 quedan como ruido esperado dentro del laboratorio aislado.',
    lines: ['named.service - BIND Domain Name Server', 'Active: active (running)', 'IPv4 listo para clientes LAN'],
  },
  {
    icon: RadioTower,
    title: 'Servidor web auditado',
    command: 'ss -tulpn',
    label: 'Puertos verificados',
    detail:
      'Apache2 escucha en el puerto 80, SSH queda disponible en 22 y SNMP se preparo en 161 para monitoreo.',
    lines: ['tcp LISTEN 0.0.0.0:80 apache2', 'tcp LISTEN 0.0.0.0:22 sshd', 'udp UNCONN 0.0.0.0:161 snmpd'],
  },
  {
    icon: Globe2,
    title: 'Resolucion de dominios',
    command: 'nslookup zona1.org',
    label: 'DNS probado',
    detail:
      'Las zonas configuradas responden al instante y apuntan correctamente al servidor web interno 192.168.100.4.',
    lines: ['Server: 192.168.100.3', 'zona1.org -> 192.168.100.4', 'zona2.org -> 192.168.100.4'],
  },
  {
    icon: Network,
    title: 'Router LAN/WAN',
    command: 'ip a',
    label: 'Direccionamiento',
    detail:
      'El router separa la red local de la salida a internet usando enp0s3 para LAN y enp0s8 para WAN.',
    lines: ['enp0s3 LAN 192.168.100.1/20', 'enp0s8 WAN 10.0.3.15/24', 'Interfaces UP'],
  },
  {
    icon: Terminal,
    title: 'Configuracion manual',
    command: 'nmcli device status',
    label: 'Debian 13',
    detail:
      'Las tarjetas aparecen sin gestion porque las IPs fueron configuradas a mano en archivos del sistema.',
    lines: ['lo connected', 'enp0s3 sin gestion', 'enp0s8 sin gestion'],
  },
  {
    icon: ShieldCheck,
    title: 'Firewall y NAT',
    command: 'nft list ruleset',
    label: 'nftables',
    detail:
      'Reglas de enmascaramiento para salida a internet y trafico permitido solo cuando fue solicitado desde la red interna.',
    lines: ['forward LAN -> WAN accept', 'ct state related,established accept', 'postrouting masquerade'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-kicker">Proyectos</div>
      <h2 className="section-title">Trabajo seleccionado.</h2>

      <article className="lab-project mt-8 sm:mt-10">
        <div className="lab-project__intro">
          <div>
            <span className="lab-project__eyebrow">
              <CheckCircle2 size={16} />
              Proyecto de infraestructura
            </span>
            <h3>Laboratorio Linux DNS, Web y Router</h3>
          </div>
          <p>
            Implementacion de servicios sobre Debian 13 con BIND9, Apache2, direccionamiento LAN/WAN,
            NAT y reglas de firewall. El objetivo fue levantar una red funcional, documentada y lista
            para clientes internos.
          </p>
        </div>

        <div className="lab-project__map" aria-label="Arquitectura del laboratorio">
          <span>Clientes LAN</span>
          <strong>192.168.100.0/20</strong>
          <span>Router NAT</span>
          <strong>enp0s3 / enp0s8</strong>
          <span>DNS + Web</span>
          <strong>BIND9 / Apache2</strong>
        </div>

        <div className="lab-evidence-grid">
          {infrastructureHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="lab-evidence-card">
                <div className="lab-evidence-card__head">
                  <span>
                    <Icon size={18} />
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <small>{item.label}</small>
                  </div>
                </div>

                <div className="lab-terminal" aria-label={item.command}>
                  <div className="lab-terminal__bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <code>$ {item.command}</code>
                  {item.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>

                <p>{item.detail}</p>
              </div>
            );
          })}
        </div>
      </article>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-ink/10 bg-white/65 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <span className="rounded-full bg-moss/10 px-3 py-1 text-xs font-bold text-moss">
                {project.status}
              </span>
              <div className="flex shrink-0 gap-2">
                <a className="icon-link" href={project.github} aria-label={`${project.title} GitHub`}>
                  <Github size={17} />
                </a>
                <a className="icon-link" href={project.demo} aria-label={`${project.title} demo`}>
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
            <h3 className="font-display text-lg font-bold leading-tight sm:text-xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/65 sm:text-base">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
