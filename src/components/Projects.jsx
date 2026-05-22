import {
  CheckCircle2,
  Globe2,
  Network,
  RadioTower,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

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
      'Apache2 escucha en el puerto 80, SSH queda disponible en 22 y SNMP se preparó en 161 para monitoreo.',
    lines: ['tcp LISTEN 0.0.0.0:80 apache2', 'tcp LISTEN 0.0.0.0:22 sshd', 'udp UNCONN 0.0.0.0:161 snmpd'],
  },
  {
    icon: Globe2,
    title: 'Resolución de dominios',
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
    title: 'Configuración manual',
    command: 'nmcli device status',
    label: 'Debian 13',
    detail:
      'Las tarjetas aparecen sin gestión porque las IPs fueron configuradas a mano en archivos del sistema.',
    lines: ['lo connected', 'enp0s3 sin gestión', 'enp0s8 sin gestión'],
  },
  {
    icon: ShieldCheck,
    title: 'Firewall y NAT',
    command: 'nft list ruleset',
    label: 'nftables',
    detail:
      'Reglas de enmascaramiento para salida a internet y tráfico permitido solo cuando fue solicitado desde la red interna.',
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
            Implementación de servicios sobre Debian 13 con BIND9, Apache2, direccionamiento LAN/WAN,
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

    </section>
  );
}
