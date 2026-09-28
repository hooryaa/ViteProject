import './style.css';

const skills = [
  {
    name: 'Data Platform Architecture',
    items: 'distributed data platforms, lakehouse architecture, medallion (bronze/silver/gold), data mesh, data fabric, data products, domain boundaries, data contracts, event driven architecture, schema evolution, multi tenant design, platform modernization, migration strategy'
  },
  {
    name: 'Cloud and Lakehouse',
    items: 'AWS, Azure, GCP, Databricks, Microsoft Fabric, OneLake, Snowflake, S3, ADLS, Delta Lake, Iceberg, Glue, EMR, Azure Data Factory, Fabric Data Factory/Data Pipelines, Event Hubs, Lambda, BigQuery'
  },
  {
    name: 'Data Engineering',
    items: 'ETL, ELT, batch processing, streaming, CDC, ingestion, transformation, publishing, data integration, pipeline orchestration, incremental processing, backfills, replay, idempotency, checkpointing, watermarks, late-arriving data, dependency-aware workflows'
  },
  {
    name: 'Programming and Software Engineering',
    items: 'Python, object-oriented programming (OOP), SOLID principles, reusable frameworks, SQL, T-SQL, PySpark, TypeScript, FastAPI, Pydantic, REST APIs, asynchronous workers, CLI tooling, unit/integration testing, code review, Git, CI/CD'
  },
  {
    name: 'Data Processing and Streaming',
    items: 'Apache Spark, PySpark, Spark SQL, Kafka, Kinesis, Flink, Event Hubs, event-time processing, distributed transformations, streaming architectures, schema evolution, fault recovery'
  },
  {
    name: 'Databases and Warehousing',
    items: 'PostgreSQL, Amazon Aurora, Snowflake, BigQuery, Databricks SQL, SQL Server/T-SQL, dimensional modeling, Data Vault, star schemas, slowly changing dimensions, warehouse optimization, indexing, set-based SQL'
  },
  {
    name: 'Analytics and Data Products',
    items: 'Power BI, Tableau, semantic models, data marts, feature datasets, analytics engineering, KPI-ready datasets, canonical models, business metrics, operational reporting, machine-learning-ready data'
  },
  {
    name: 'Data Quality, Governance and Security',
    items: 'validation frameworks, reconciliation, data contracts, metadata, lineage, Unity Catalog, Microsoft Purview, role-based access, RBAC, encryption, masking, tokenization, audit logging, retention, PHI-aware controls, data observability'
  },
  {
    name: 'DataOps, DevOps and Reliability',
    items: 'Terraform, Docker, Kubernetes, GitHub Actions, Azure DevOps, CI/CD, observability, logging, monitoring, incident response, disaster recovery, capacity planning, SLOs, failure detection, restartable pipelines, production support'
  },
  {
    name: 'Architecture and Leadership',
    items: 'technical proposals, architecture reviews, platform roadmaps, reusable engineering standards, cost ownership, migration planning, client workshops, requirements analysis, cross-functional delivery, technical consulting, mentoring, executive communication'
  }
];

const experiences = [
  {
    company: 'Alphabridge Consulting',
    tag: 'Healthcare and Life Sciences',
    role: 'Staff Data Platform Engineer / Client Architecture Lead',
    date: 'Mar 2024 to Present',
    location: 'Remote',
    bulletPoints: [
      'Lead end-to-end architecture for governed healthcare and life sciences data products spanning claims, encounters, pharmacy, laboratory, eligibility, EHR, and research sources.',
      'Design cloud-native ingestion and processing patterns for EDI 837/835, HL7, FHIR, C-CDA, APIs, database extracts, and files using AWS services and reusable Python/PySpark components.',
      'Apply object-oriented Python, modular design, reusable abstractions, configuration-driven processing, and automated testing to build maintainable data-platform frameworks.',
      'Design raw, validated, conformed, and consumption layers with canonical patient, member, provider, encounter, claim, medication, and laboratory models.',
      'Engineer reliable pipelines with schema compatibility, data contracts, idempotency, checkpoints, late-data handling, quarantine, replay, backfills, control totals, duplicate detection, and reconciliation.',
      'Implement encryption, tokenization, masking, least-privilege access, retention, and audit trails for protected healthcare information across platform environments.',
      'Publish point-in-time-correct feature datasets with lineage, ownership, quality contracts, and stable interfaces for utilization and risk analytics.',
      'Establish freshness, completeness, validity, and volume objectives with trace identifiers, dashboards, alerts, runbooks, and consumer-focused incident reviews.',
      'Build reusable validation, transformation, publishing, logging, metrics, testing, and environment-aware deployment frameworks that improve consistency across data products.',
      'Facilitate client discovery workshops, architecture reviews, roadmap decisions, and technical trade-offs while mentoring engineers on design, debugging, delivery ownership, and stakeholder communication.'
    ]
  },
  {
    company: 'CTG',
    tag: 'Banking and Insurance',
    role: 'Senior Data Engineer / Data Platform Consultant',
    date: 'Apr 2021 to Feb 2024',
    location: 'Remote',
    bulletPoints: [
      'Delivered Azure, Databricks, Microsoft Fabric, and Snowflake data platforms for banking and insurance clients across transactions, cards, accounts, policies, premiums, claims, and payments.',
      'Built metadata-driven batch and CDC pipelines with Azure Data Factory, ADLS, Event Hubs, PySpark, Delta Lake, dbt, Airflow, and Microsoft Fabric Data Pipelines.',
      'Applied Python, SQL, OOP, modular pipeline design, reusable components, and automated testing to standardize repeatable ingestion and transformation patterns.',
      'Modeled Data Vault integration layers and dimensional marts supporting fraud, credit risk, underwriting, actuarial analysis, finance, and regulatory reporting.',
      'Applied Unity Catalog and Microsoft Purview for metadata, lineage, ownership, classification, role-based access, masking, retention, auditing, and controlled sharing.',
      'Engineered restartable workflows with dependency checks, watermarks, balancing rules, exception queues, reconciliation tolerances, backfills, and documented recovery-order procedures.',
      'Tuned Spark joins, partitioning, file sizes, caching, clustering, SQL transformations, and warehouse allocation, cutting compute cost by about one quarter.',
      'Planned legacy migrations through inventory, dependency mapping, dual processing, historical backfills, business validation, cutover evidence, rollback preparation, and support transfer.',
      'Partnered with client stakeholders to translate business and regulatory requirements into scalable data models, pipeline designs, governance controls, and delivery plans.'
    ]
  },
  {
    company: 'MBO Partners',
    tag: 'Workforce Technology',
    role: 'Data Engineer',
    date: 'Jun 2018 to Mar 2021',
    location: 'Remote',
    bulletPoints: [
      'Built production Python and SQL data pipelines with Airflow, dbt, PostgreSQL, Aurora, and S3 for clients, professionals, engagements, contracts, time, invoices, and payments.',
      'Used object-oriented Python, reusable modules, configuration-driven processing, SQL transformations, and testable pipeline components to improve maintainability and repeatability.',
      'Integrated CRM, marketplace, finance, support, and billing sources through APIs, replication, scheduled files, watermarks, incremental models, rerunnable stages, and cloud data services.',
      'Replaced cursor-heavy ETL with bulk loading, set-based SQL, partitioned transformations, and targeted indexes, shrinking nightly processing below one hour.',
      'Modeled worker, client, engagement, contract, invoice, payment, and organization dimensions with historical tracking, documented business definitions, and ownership.',
      'Delivered tested marts and semantic models for revenue, utilization, acquisition, retention, payment aging, marketplace conversion, and operational service measures.',
      'Collaborated with business and technical stakeholders to clarify requirements, troubleshoot production issues, document data behavior, and deliver reliable analytics-ready datasets.'
    ]
  }
];

const projects = [
  {
    title: 'Healthcare Interoperability Lakehouse',
    summary: 'Built a healthcare interoperability lakehouse ingesting HL7, FHIR, and C-CDA feeds into canonical patient, encounter, and claim models with validation, lineage, and PHI aware access controls.'
  },
  {
    title: 'Banking CDC and Governance',
    summary: 'Delivered a banking change data capture and governance platform on Databricks and Snowflake with Data Vault modeling, Unity Catalog lineage, and automated reconciliation for regulatory reporting.'
  },
  {
    title: 'Retail Demand Lakehouse',
    summary: 'Built a retail lakehouse with Kafka, Spark, Databricks, Snowflake, dbt, and Airflow for merchandising, fulfillment, loyalty, and demand forecasting.'
  },
  {
    title: 'Multi-Tenant Usage and Billing',
    summary: 'Developed a multi tenant usage and billing product using BigQuery, Dataflow, Pub/Sub, Airflow, and Terraform with isolation and cost attribution.'
  }
];

const skillMarkup = (skill) => `
  <div class="skill-row">
    <h3>${skill.name}</h3>
    <p>${skill.items}</p>
  </div>
`;

const experienceMarkup = (entry) => `
  <article class="experience-card reveal">
    <div class="experience-header">
      <div>
        <h3>${entry.company}</h3>
        <p class="experience-tag">${entry.tag}</p>
      </div>
      <span class="experience-location">${entry.location}</span>
    </div>
    <div class="experience-meta">
      <strong>${entry.role}</strong>
      <span>${entry.date}</span>
    </div>
    <ul>
      ${entry.bulletPoints.map((point) => `<li>${point}</li>`).join('')}
    </ul>
  </article>
`;

const projectMarkup = (project) => `
  <article class="project-card reveal">
    <div class="project-card__header">
      <span class="project-index">${project.title.split(' ')[0].slice(0, 3).toUpperCase()}</span>
      <span class="project-tag">${project.title.includes('Healthcare') ? 'Healthcare' : project.title.includes('Banking') ? 'Banking' : project.title.includes('Retail') ? 'Retail' : 'Platform'}</span>
    </div>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
  </article>
`;

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Saffy Kelsom home"><span class="brand-mark">SK</span><span>SAFFY KELSOM<span class="brand-dot">.</span></span></a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#summary">Summary</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
    </nav>
    <a class="status-pill" href="mailto:codent.workspace@gmail.com"><span></span>Open to the right problem</a>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
  </header>

  <main id="top">
    <section class="hero section-shell" id="summary">
      <div class="hero-copy reveal">
        <p class="eyebrow"><span class="eyebrow-line"></span> STAFF DATA PLATFORM ENGINEER / BETHEL PARK, PA</p>
        <h1>Saffy Kelsom</h1>
        <p class="hero-role">Staff Data Platform Engineer, Cloud and Data Products</p>
        <p class="hero-intro">Staff data platform engineer with more than 8 years of experience delivering consulting and product data systems for healthcare and life sciences, financial services and insurance, workforce technology, retail and commerce, manufacturing and supply chain, logistics, and software platforms. Combines hands on Python, SQL, Spark, streaming, lakehouse, and warehouse engineering with architecture ownership, data product design, migration planning, DataOps, cost control, and mentoring.</p>
        <div class="hero-actions">
          <a class="button button--dark" href="#experience">View experience <span>↘</span></a>
          <a class="text-link" href="mailto:codent.workspace@gmail.com">Start a conversation <span>↗</span></a>
        </div>
      </div>

      <aside class="contact-panel reveal reveal-delay" aria-label="Contact details">
        <div class="contact-line">Bethel Park, PA 15102 <span>|</span> (281) 555-0146</div>
        <div class="contact-line"><a href="mailto:codent.workspace@gmail.com">codent.workspace@gmail.com</a> <span>|</span> <a href="https://github.com/seffykalsom" target="_blank" rel="noreferrer">github.com/seffykalsom</a></div>
      </aside>
    </section>

    <section class="section-shell" id="skills">
      <div class="section-heading">
        <div class="section-kicker"><span>01</span><span>Core Skills</span></div>
      </div>
      <div class="skill-grid">
        ${skills.map(skillMarkup).join('')}
      </div>
    </section>

    <section class="section-shell" id="experience">
      <div class="section-heading">
        <div class="section-kicker"><span>02</span><span>Professional Experience</span></div>
      </div>
      <div class="experience-stack">
        ${experiences.map(experienceMarkup).join('')}
      </div>
    </section>

    <section class="section-shell" id="projects">
      <div class="section-heading">
        <div class="section-kicker"><span>03</span><span>Selected Projects</span></div>
      </div>
      <div class="project-grid">
        ${projects.map(projectMarkup).join('')}
      </div>
    </section>

    <section class="section-shell education-block" id="education">
      <div class="section-heading">
        <div class="section-kicker"><span>04</span><span>Education</span></div>
      </div>
      <div class="education-card reveal">
        <h3>Bachelor of Science in Economics</h3>
        <p>Coursework: Algorithms, Database Systems, Distributed Systems, and Machine Learning</p>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="contact">
    <span>© 2026 SAFFY KELSOM</span>
    <span>BETHEL PARK, PA</span>
    <a href="#top">BACK TO TOP ↑</a>
  </footer>
`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
