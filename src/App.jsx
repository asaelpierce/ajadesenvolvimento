import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Brain, ShieldCheck, Users, TrendingUp, 
  HeartHandshake, ChevronRight, CheckCircle2, 
  Phone, Mail, Linkedin, Facebook, ArrowRight,
  Lock, Save, Plus, Trash2, Check,
  Settings, Layout, Type, List, ImageIcon, Star, Upload,
  BarChart, MessageSquare, Building, Calendar, CheckSquare, Square,
  Palette, Layers
} from 'lucide-react';

const DEFAULT_SITE_DATA = {
  theme: {
    primary: "#172554", 
    accent: "#f59e0b",
  },
  secoesExtras: [],
  contatos: {
    telefone: "(31) 9554-1046",
    email: "alextaveiraoficial@gmail.com",
    linkedin: "https://linkedin.com/in/alexsandro-taveira/",
    facebook: "https://facebook.com/alextaveiraoficial",
    siteAja: "https://ajads.com.br",
    siteAlex: "https://alextaveira.com.br"
  },
  hero: {
    frasesRotativas: ["evoluir empresas.", "formar líderes.", "engajar equipes."],
    subtitulo: "Especialista em Riscos Psicossociais (NR-01), Saúde Mental Corporativa e Liderança de Alta Performance. Mais de 15 anos impulsionando o sucesso organizacional.",
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  premissa: {
    imagem: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  },
  galeria: [
    { titulo: "Workshop de Liderança", url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
    { titulo: "Treinamento NR-01", url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1000&auto=format&fit=crop" },
    { titulo: "Engajamento na Prática", url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" }
  ],
  sobre: {
    citacao: "Ser reconhecido como um dos principais profissionais de transformação pessoal e profissional no Brasil, criando uma rede de pessoas emocionalmente inteligentes.",
    texto1: "A AJA Desenvolvimento Humano, empresa fundada por Alex Taveira, é especializada em NR 01 (Riscos Psicossociais), saúde mental corporativa e desenvolvimento humano. Atuamos com treinamentos, mentorias e programas personalizados que capacitam líderes e equipes a alcançarem desenvolvimento e alta performance.",
    texto2: "Transformamos ambientes organizacionais por meio de uma abordagem prática e estratégica, promovendo crescimento profissional, equilíbrio emocional e resultados sustentáveis. Desenvolver pessoas é o caminho mais eficaz para evoluir empresas.",
    imagemPerfil: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
  },
  missao: "Desenvolver e fortalecer o bem estar das pessoas unindo Segurança do Trabalho, Saúde Mental e desenvolvimento humano com as ferramentas necessárias para liderar elas mesmas e os outros, promovendo uma empresa e a sociedade mais consciente e saudável.",
  visao: "Ser reconhecido como um dos principais profissionais de transformação pessoal e profissional no Brasil, criando uma rede de pessoas emocionalmente inteligentes.",
  valores: [
    { titulo: "Integridade", desc: "Manter a honestidade e a ética em todas as ações e negociações." },
    { titulo: "Respeito", desc: "Valorizar e respeitar a diferença de pensamentos, culturas e experiências." },
    { titulo: "Cooperação", desc: "Promover o trabalho em equipe e a cooperação." },
    { titulo: "Inovação", desc: "Buscar sempre novas ideias e soluções criativas." },
    { titulo: "Confiança", desc: "Construir relações com confiança mútua e na credibilidade." },
    { titulo: "Amor pelo que faz", desc: "Manter entusiasmo e compromisso com o desenvolvimento humano." },
    { titulo: "Empatia", desc: "Compreender as perspectivas e emoções dos outros." },
    { titulo: "Adaptabilidade", desc: "Ser flexível a mudanças e novas abordagens." },
    { titulo: "Bem-Estar", desc: "Priorizar a saúde física e mental das pessoas." },
    { titulo: "Excelência", desc: "Buscar a qualidade máxima em todos os aspects do trabalho." }
  ],
  servicos: [
    {
      id: "nr01",
      icone: "Brain",
      titulo: "Riscos Psicossociais (NR-01)",
      quandoAparece: "Se você percebe aumento de estresse, conflitos recorrentes, absenteísmo, queda de produtividade, lideranças sobrecarregadas, medo de errar e clima pesado.",
      proposta: "Gestão de Riscos Psicossociais integrando SST + Saúde Mental + Desenvolvimento Humano para identificar e tratar fatores psicossociais.",
      topicos: [
        "Avaliação psicossocial validada",
        "Mapeamento de fatores de risco",
        "Plano de ação priorizado",
        "Capacitação de líderes e equipes",
        "Acompanhamento de indicadores"
      ]
    },
    {
      id: "engajamento",
      icone: "Users",
      titulo: "Engajamento de Equipes",
      quandoAparece: "Dificuldade em manter as equipes motivadas e alinhadas com os objetivos da empresa.",
      proposta: "Treinamento Formação de Equipes de Sucesso, focando em estratégias para despertar a motivação verdadeira.",
      topicos: [
        "O ambiente de trabalho perfeito",
        "Relacionamento intrapessoal",
        "Empatia no trabalho",
        "Colaboração e evolução humana"
      ]
    },
    {
      id: "lideranca",
      icone: "TrendingUp",
      titulo: "Liderança de Alta Performance",
      quandoAparece: "Metas pouco claras, equipes desorganizadas e dificuldade em atingir os resultados pela falta de gestão.",
      proposta: "Formação de Líderes com foco no papel do gestor no ambiente corporativo e na inteligência emocional.",
      topicos: [
        "Inteligência emocional na liderança",
        "Autoliderança e autocontrole",
        "Perfis de liderança",
        "Estratégias para engajar equipes"
      ]
    },
    {
      id: "emocoes",
      icone: "HeartHandshake",
      titulo: "Gestão de Emoções no Trabalho",
      quandoAparece: "Estresse, conflitos internos e um ambiente desequilibrado comprometendo a produtividade e o bem-estar.",
      proposta: "Desenvolvimento do autocontrole emocional e estratégias práticas para evitar o sofrimento no ambiente de trabalho.",
      topicos: [
        "Autocontrole: Domine a mente",
        "Como evitar sofrimentos no trabalho",
        "Relações mais saudáveis",
        "Equilíbrio emocional diário"
      ]
    }
  ],
  clientes: [
    { nome: "SADA", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sada_logo.png" },
    { nome: "ambev", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ambev_logo.svg/1200px-Ambev_logo.svg.png" },
    { nome: "Mater Dei", logoUrl: "https://logodownload.org/wp-content/uploads/2019/11/mater-dei-logo.png" },
    { nome: "SENAI", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SENAI_S%C3%A3o_Paulo_logo.png/1200px-SENAI_S%C3%A3o_Paulo_logo.png" },
    { nome: "Sesc", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Sesc_logo.svg/1200px-Sesc_logo.svg.png" }
  ]
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    });
    if(domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={domRef} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  );
};

const AnimatedNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const domRef = React.useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if(domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={domRef}>{count}{suffix}</span>;
};

const AdminPanel = ({ data, onSave, onClose, supabaseUrl, supabaseKey, userRole }) => {
  const [formData, setFormData] = useState(data);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [leads, setLeads] = useState([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [leadFilter, setLeadFilter] = useState('Todos');

  useEffect(() => {
    if (activeTab === 'dashboard') {
      fetchLeads();
    }
  }, [activeTab]);

  const fetchLeads = async () => {
    setIsLoadingLeads(true);
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/leads_contato?select=*&order=data_contato.desc`, {
        headers: { 
          'apikey': supabaseKey, 
          'Authorization': `Bearer ${supabaseKey}` 
        }
      });
      const json = await res.json();
      if (json) setLeads(json);
    } catch (error) {
      console.error("Erro ao buscar leads", error);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const toggleLeadStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Novo' ? 'Atendido' : 'Novo';
    try {
      await fetch(`${supabaseUrl}/rest/v1/leads_contato?id=eq.${id}`, {
        method: 'PATCH',
        headers: { 
          'apikey': supabaseKey, 
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ status: newStatus })
      });
      fetchLeads();
    } catch (error) {
      console.error("Erro ao atualizar status", error);
    }
  };

  const handleChange = (section, field, value) => {
    if (section) {
      setFormData(prev => ({ ...prev, [section]: { ...(prev[section] || {}), [field]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleImageUpload = (e, section, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
         handleChange(section, field, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClientImageUpload = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
         const newClientes = [...(formData.clientes || [])];
         newClientes[idx] = { ...newClientes[idx], logoUrl: reader.result };
         handleChange(null, 'clientes', newClientes);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryImageUpload = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
         const newGaleria = [...(formData.galeria || [])];
         newGaleria[idx] = { ...newGaleria[idx], url: reader.result };
         handleChange(null, 'galeria', newGaleria);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleExtraSectionImage = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
         const newSecoes = [...(formData.secoesExtras || [])];
         newSecoes[idx] = { ...newSecoes[idx], imagem: reader.result };
         handleChange(null, 'secoesExtras', newSecoes);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-slate-100 w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header do CMS */}
        <div className="bg-blue-950 text-white px-8 py-4 flex justify-between items-center shrink-0 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-2 rounded-lg text-blue-950"><Settings size={20} /></div>
            <div>
              <h2 className="font-bold text-xl leading-tight">Painel de Edição</h2>
              <p className="text-blue-200 text-xs">Alterações refletem em tempo real no site</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={onClose} className="px-4 py-2 text-blue-200 hover:text-white font-medium transition-colors">Fechar</button>
            {userRole === 'dev' && (
              <button onClick={() => onSave(formData)} className="bg-amber-500 hover:bg-amber-400 text-blue-950 px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg">
                <Save size={18} /> Salvar Site
              </button>
            )}
          </div>
        </div>

        {/* Corpo do CMS */}
        <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
          
          {/* Menu Lateral */}
          <div className="w-full md:w-64 bg-blue-900 text-white p-4 shrink-0 overflow-y-auto">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 mb-auto">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2 mt-2 hidden md:block px-3">Gestão</span>
              <button onClick={()=>setActiveTab('dashboard')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='dashboard' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><BarChart size={18} /> Dashboard & Leads</button>
              
              {userRole === 'dev' && (
                <>
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2 mt-4 hidden md:block px-3">Design & Estrutura</span>
                  <button onClick={()=>setActiveTab('cores')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='cores' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><Palette size={18} /> Cores do Site</button>
                  <button onClick={()=>setActiveTab('secoesExtras')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='secoesExtras' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><Layers size={18} /> Criar Seções</button>
                  
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2 mt-4 hidden md:block px-3">Editar Conteúdo</span>
                  <button onClick={()=>setActiveTab('geral')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='geral' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><Phone size={18} /> Geral & Logo</button>
                  <button onClick={()=>setActiveTab('topo')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='topo' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><Layout size={18} /> Início & Premissa</button>
                  <button onClick={()=>setActiveTab('empresa')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='empresa' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><Type size={18} /> Missão & Visão</button>
                  <button onClick={()=>setActiveTab('servicos')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='servicos' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><List size={18} /> Serviços</button>
                  <button onClick={()=>setActiveTab('galeria')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='galeria' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><ImageIcon size={18} /> Galeria de Fotos</button>
                  <button onClick={()=>setActiveTab('clientes')} className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all whitespace-nowrap ${activeTab==='clientes' ? 'bg-amber-500 text-blue-950 font-bold' : 'hover:bg-white/10'}`}><Star size={18} /> Marcas e Logos</button>
                </>
              )}
            </div>
          </div>

          {/* Área de Edição */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
            
            {/* Aba Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6 max-w-6xl animate-in fade-in duration-300">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                       <div className="flex items-center gap-4 mb-2">
                         <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Users size={24}/></div>
                         <div><p className="text-sm font-bold text-slate-500 uppercase">Total de Leads</p><h4 className="text-3xl font-black text-blue-950">{leads.length}</h4></div>
                       </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-200 bg-amber-50/50">
                       <div className="flex items-center gap-4 mb-2">
                         <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><MessageSquare size={24}/></div>
                         <div><p className="text-sm font-bold text-slate-500 uppercase">Aguardando Retorno</p><h4 className="text-3xl font-black text-blue-950">{leads.filter(l => l.status === 'Novo').length}</h4></div>
                       </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group">
                       <div className="flex items-center gap-4 mb-2 relative z-10">
                         <div className="p-3 bg-green-100 text-green-600 rounded-xl"><TrendingUp size={24}/></div>
                         <div><p className="text-sm font-bold text-slate-500 uppercase">Acessos no Site</p><h4 className="text-3xl font-black text-blue-950">Analytics</h4></div>
                       </div>
                       <div className="absolute inset-0 bg-slate-900/90 text-white p-4 text-xs font-medium flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm">
                         Para exibir visitas exatas, integre a tag gratuita do Google Analytics.
                       </div>
                    </div>
                 </div>

                 <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-slate-50/50">
                      <div>
                        <h3 className="text-lg font-bold text-blue-950">Caixa de Entrada de Oportunidades</h3>
                        <p className="text-sm text-slate-500">Contatos recebidos através do formulário do site.</p>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="bg-slate-200/50 p-1 rounded-xl flex gap-1">
                           <button onClick={() => setLeadFilter('Todos')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${leadFilter === 'Todos' ? 'bg-white text-blue-950 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Todos</button>
                           <button onClick={() => setLeadFilter('Novos')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${leadFilter === 'Novos' ? 'bg-amber-100 text-amber-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Novos</button>
                           <button onClick={() => setLeadFilter('Atendidos')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${leadFilter === 'Atendidos' ? 'bg-green-100 text-green-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Atendidos</button>
                         </div>
                         <button onClick={fetchLeads} className="text-sm font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg transition-colors">Atualizar</button>
                      </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                            <th className="p-4 font-bold border-b">Data</th>
                            <th className="p-4 font-bold border-b">Contato</th>
                            <th className="p-4 font-bold border-b">Desafio/Assunto</th>
                            <th className="p-4 font-bold border-b text-center">Status</th>
                            <th className="p-4 font-bold border-b text-right">Ações</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {isLoadingLeads ? (
                            <tr><td colSpan="5" className="p-8 text-center text-slate-400">Carregando contatos...</td></tr>
                          ) : leads.filter(l => leadFilter === 'Todos' || (leadFilter === 'Novos' ? l.status === 'Novo' : l.status === 'Atendido')).length === 0 ? (
                            <tr><td colSpan="5" className="p-8 text-center text-slate-400">Nenhum contato encontrado nesta categoria.</td></tr>
                          ) : (
                            leads.filter(l => leadFilter === 'Todos' || (leadFilter === 'Novos' ? l.status === 'Novo' : l.status === 'Atendido')).map((lead) => (
                              <tr key={lead.id} className={`transition-colors ${lead.status === 'Novo' ? 'bg-amber-50/50 hover:bg-amber-50' : 'hover:bg-slate-50/50'}`}>
                                <td className="p-4 text-sm text-slate-600 whitespace-nowrap">
                                  <div className="flex items-center gap-2"><Calendar size={14}/> {new Date(lead.data_contato).toLocaleDateString('pt-BR')}</div>
                                </td>
                                <td className="p-4">
                                  <div className="font-bold text-blue-950">{lead.nome}</div>
                                  <div className="text-xs text-slate-500 flex flex-col gap-1 mt-1">
                                    <span className="flex items-center gap-1"><Building size={12}/> {lead.empresa}</span>
                                    <span className="flex items-center gap-1"><Mail size={12}/> {lead.email}</span>
                                  </div>
                                </td>
                                <td className="p-4 text-sm font-medium text-slate-700">
                                  <span className="inline-block px-3 py-1 bg-white rounded-full text-xs border border-slate-200 shadow-sm">
                                    {lead.desafio === 'nr01' ? 'NR-01' : lead.desafio === 'engajamento' ? 'Engajamento' : lead.desafio === 'lideranca' ? 'Liderança' : lead.desafio}
                                  </span>
                                </td>
                                <td className="p-4 text-center">
                                  <button onClick={() => toggleLeadStatus(lead.id, lead.status)} className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border transition-colors hover:scale-105 ${lead.status === 'Novo' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-green-100 text-green-700 border-green-200'}`}>
                                    {lead.status === 'Novo' ? <Square size={12}/> : <CheckSquare size={12}/>}
                                    {lead.status}
                                  </button>
                                </td>
                                <td className="p-4 text-right">
                                  <div className="flex justify-end gap-2">
                                    <a href={`mailto:${lead.email}?subject=Contato pelo site da AJA Desenvolvimento&body=Olá ${lead.nome}, recebemos sua solicitação e gostaríamos de agendar um bate-papo.`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-9 h-9 bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors shadow-sm" title="Responder por E-mail">
                                      <Mail size={14}/>
                                    </a>
                                    <a href={`https://wa.me/55${lead.telefone.replace(/\D/g,'')}?text=Olá ${lead.nome}! Recebi seu contato pelo site da AJA sobre a ${lead.empresa}. Podemos conversar hoje?`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm">
                                      <Phone size={14}/> WhatsApp
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                 </div>
              </div>
            )}
            
            {/* Aba de Cores */}
            {activeTab === 'cores' && (
              <div className="space-y-6 max-w-2xl animate-in fade-in duration-300">
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary"><Palette /> Cores Principais do Site</h3>
                  <p className="text-sm text-slate-500 mb-6">Mude as cores do site. A cor principal afeta os fundos escuros, e a cor de destaque afeta os botões e textos importantes.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Cor Principal (Fundos escuros)</label>
                      <div className="flex items-center gap-4">
                        <input type="color" value={formData.theme?.primary || '#172554'} onChange={e => handleChange('theme', 'primary', e.target.value)} className="w-16 h-16 rounded cursor-pointer border-0 p-0" />
                        <span className="font-mono text-sm uppercase">{formData.theme?.primary || '#172554'}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Cor de Destaque (Botões e Textos)</label>
                      <div className="flex items-center gap-4">
                        <input type="color" value={formData.theme?.accent || '#f59e0b'} onChange={e => handleChange('theme', 'accent', e.target.value)} className="w-16 h-16 rounded cursor-pointer border-0 p-0" />
                        <span className="font-mono text-sm uppercase">{formData.theme?.accent || '#f59e0b'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Aba de Criar Seções */}
            {activeTab === 'secoesExtras' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border">
                   <div>
                     <span className="text-primary font-bold block text-lg">Construtor de Seções</span>
                     <span className="text-sm text-slate-500">Crie blocos extras de conteúdo que aparecerão no final do site.</span>
                   </div>
                   <button onClick={() => handleChange(null, 'secoesExtras', [...(formData.secoesExtras || []), { id: Date.now(), titulo: "Nova Seção", conteudo: "Escreva o texto aqui...", imagem: "", corFundo: "#ffffff", corTexto: "#0f172a" }])} className="bg-primary text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 shrink-0"><Plus size={18}/> Adicionar Bloco</button>
                </div>

                {(formData.secoesExtras || []).map((sec, idx) => (
                  <div key={sec.id} className="bg-white p-6 rounded-2xl shadow-sm border relative">
                    <button onClick={() => handleChange(null, 'secoesExtras', formData.secoesExtras.filter((_, i) => i !== idx))} className="absolute top-4 right-4 text-red-400 hover:text-red-600 p-2 bg-red-50 rounded-lg"><Trash2 size={18}/></button>
                    
                    <h4 className="font-bold text-lg mb-6 border-b pb-2">Bloco Extra {idx + 1}</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div><label className="block text-sm font-bold text-slate-700 mb-1">Título da Seção</label><input value={sec.titulo} onChange={(e) => { const newS = [...formData.secoesExtras]; newS[idx].titulo = e.target.value; handleChange(null, 'secoesExtras', newS); }} className="w-full p-3 border rounded-xl bg-slate-50 text-sm outline-none focus:border-primary" /></div>
                        <div><label className="block text-sm font-bold text-slate-700 mb-1">Conteúdo (Texto)</label><textarea rows="6" value={sec.conteudo} onChange={(e) => { const newS = [...formData.secoesExtras]; newS[idx].conteudo = e.target.value; handleChange(null, 'secoesExtras', newS); }} className="w-full p-3 border rounded-xl bg-slate-50 text-sm outline-none focus:border-primary" /></div>
                      </div>
                      
                      <div className="space-y-4">
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-bold text-slate-700 mb-1">Fundo da Seção</label>
                              <div className="flex gap-2 items-center"><input type="color" value={sec.corFundo || '#ffffff'} onChange={(e) => { const newS = [...formData.secoesExtras]; newS[idx].corFundo = e.target.value; handleChange(null, 'secoesExtras', newS); }} className="h-10 w-10 cursor-pointer rounded" /> <span className="text-xs text-slate-500 uppercase">{sec.corFundo || '#ffffff'}</span></div>
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-slate-700 mb-1">Cor da Fonte</label>
                              <div className="flex gap-2 items-center"><input type="color" value={sec.corTexto || '#0f172a'} onChange={(e) => { const newS = [...formData.secoesExtras]; newS[idx].corTexto = e.target.value; handleChange(null, 'secoesExtras', newS); }} className="h-10 w-10 cursor-pointer rounded" /> <span className="text-xs text-slate-500 uppercase">{sec.corTexto || '#0f172a'}</span></div>
                            </div>
                         </div>
                         
                         <div>
                           <label className="block text-sm font-bold text-slate-700 mb-1">Imagem Principal (Link ou Upload)</label>
                           <div className="flex gap-2 mb-2">
                             <input value={sec.imagem || ''} onChange={(e) => { const newS = [...formData.secoesExtras]; newS[idx].imagem = e.target.value; handleChange(null, 'secoesExtras', newS); }} className="w-full p-3 border rounded-xl bg-slate-50 text-sm outline-none" placeholder="URL da foto..." />
                             <label className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-xl cursor-pointer flex items-center justify-center shrink-0">
                                <Upload size={18} />
                                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleExtraSectionImage(e, idx)} />
                             </label>
                           </div>
                           {sec.imagem && <img src={sec.imagem} alt="Preview" className="w-full h-32 object-cover rounded-xl border border-slate-200 shadow-inner" />}
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Abas Anteriores */}
            {activeTab === 'geral' && (
              <div className="space-y-6 max-w-2xl animate-in fade-in duration-300">
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                  <h3 className="text-lg font-bold mb-4">Logotipo Principal</h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Logo do Menu (Upload)</label>
                    <p className="text-xs text-slate-500 mb-2">Recomendado: Imagem com fundo transparente (PNG). Se vazio, aparecerá o texto "Alex Taveira".</p>
                    <div className="flex gap-2">
                      <input value={formData.logoSite || ''} onChange={(e) => handleChange(null, 'logoSite', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none" placeholder="Deixe vazio para usar texto..." />
                      <label title="Enviar do computador" className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center shrink-0">
                         <Upload size={20} />
                         <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => handleChange(null, 'logoSite', reader.result);
                              reader.readAsDataURL(file);
                            }
                         }} />
                      </label>
                    </div>
                    {formData.logoSite && <div className="mt-4 p-4 bg-primary rounded-xl inline-block shadow-inner"><img src={formData.logoSite} alt="Preview Logo" className="h-10 object-contain" /></div>}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                  <h3 className="text-lg font-bold mb-4">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div><label className="block text-sm font-bold text-slate-700 mb-1">WhatsApp / Telefone</label><input value={formData.contatos?.telefone || ''} onChange={(e) => handleChange('contatos', 'telefone', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none" /></div>
                    <div><label className="block text-sm font-bold text-slate-700 mb-1">E-mail</label><input value={formData.contatos?.email || ''} onChange={(e) => handleChange('contatos', 'email', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none" /></div>
                    <div><label className="block text-sm font-bold text-slate-700 mb-1">LinkedIn (Link)</label><input value={formData.contatos?.linkedin || ''} onChange={(e) => handleChange('contatos', 'linkedin', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none" /></div>
                    <div><label className="block text-sm font-bold text-slate-700 mb-1">Facebook (Link)</label><input value={formData.contatos?.facebook || ''} onChange={(e) => handleChange('contatos', 'facebook', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none" /></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'topo' && (
              <div className="space-y-6 max-w-2xl animate-in fade-in duration-300">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h3 className="text-lg font-bold mb-4 text-primary">Seção: Início</h3>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Frases Rotativas (Animação do Topo)</label>
                      <div className="space-y-2 mb-2">
                        {(formData.hero?.frasesRotativas || []).map((frase, idx) => (
                           <div key={idx} className="flex gap-2">
                             <input value={frase} onChange={(e) => {
                                const newF = [...(formData.hero.frasesRotativas || [])];
                                newF[idx] = e.target.value;
                                handleChange('hero', 'frasesRotativas', newF);
                             }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none focus:border-primary" />
                             <button onClick={() => {
                                const newF = formData.hero.frasesRotativas.filter((_, i) => i !== idx);
                                handleChange('hero', 'frasesRotativas', newF);
                             }} className="bg-red-50 text-red-500 p-2 rounded-lg hover:bg-red-100"><Trash2 size={16}/></button>
                           </div>
                        ))}
                      </div>
                      <button onClick={() => handleChange('hero', 'frasesRotativas', [...(formData.hero?.frasesRotativas || []), "nova frase."])} className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:text-blue-800"><Plus size={16}/> Adicionar Frase</button>
                    </div>

                    <div className="mb-6">
                       <label className="block text-sm font-bold text-slate-700 mb-1">Subtítulo Abaixo do Título Principal</label>
                       <textarea rows="3" value={formData.hero?.subtitulo || ''} onChange={(e) => handleChange('hero', 'subtitulo', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none focus:border-primary" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Imagem de Fundo (Upload)</label>
                      <p className="text-xs text-slate-500 mb-2">Recomendado: Imagem horizontal em alta qualidade.</p>
                      <div className="flex gap-2">
                        <input value={formData.hero?.backgroundImage || ''} onChange={(e) => handleChange('hero', 'backgroundImage', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none" placeholder="URL da imagem" />
                        <label title="Enviar do computador" className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center shrink-0">
                           <Upload size={20} />
                           <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'hero', 'backgroundImage')} />
                        </label>
                      </div>
                    </div>
                 </div>

                 <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h3 className="text-lg font-bold mb-4 text-primary">Seção: A Premissa</h3>
                    
                    <div className="space-y-4">
                      <div><label className="block text-sm font-bold text-slate-700 mb-1">Primeiro Parágrafo</label><textarea rows="3" value={formData.premissa?.texto1 || ''} onChange={(e) => handleChange('premissa', 'texto1', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none focus:border-primary text-sm" /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-1">Segundo Parágrafo (Aquele que cita a NR-01)</label><textarea rows="3" value={formData.premissa?.texto2 || ''} onChange={(e) => handleChange('premissa', 'texto2', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none focus:border-primary text-sm" /></div>
                      
                      <div className="p-4 bg-slate-50 rounded-xl border">
                         <h4 className="font-bold text-sm mb-3">Caixa de Destaque</h4>
                         <div className="mb-2"><label className="block text-xs font-bold text-slate-700 mb-1">Título do Destaque</label><input value={formData.premissa?.destaqueTitulo || ''} onChange={(e) => handleChange('premissa', 'destaqueTitulo', e.target.value)} className="w-full p-2 border rounded-lg bg-white text-sm outline-none focus:border-primary" /></div>
                         <div><label className="block text-xs font-bold text-slate-700 mb-1">Texto do Destaque</label><textarea rows="2" value={formData.premissa?.destaqueTexto || ''} onChange={(e) => handleChange('premissa', 'destaqueTexto', e.target.value)} className="w-full p-2 border rounded-lg bg-white text-sm outline-none focus:border-primary" /></div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Foto da Premissa (Upload)</label>
                        <div className="flex gap-2">
                          <input value={formData.premissa?.imagem || ''} onChange={(e) => handleChange('premissa', 'imagem', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none" placeholder="URL da foto" />
                          <label title="Enviar do computador" className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center shrink-0">
                             <Upload size={20} />
                             <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'premissa', 'imagem')} />
                          </label>
                        </div>
                        {formData.premissa?.imagem && <img src={formData.premissa.imagem} alt="Preview" className="mt-4 h-32 w-full object-cover rounded-xl shadow-sm border" />}
                      </div>
                    </div>
                 </div>
              </div>
            )}

            {activeTab === 'empresa' && (
               <div className="space-y-6 max-w-3xl animate-in fade-in duration-300">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-4">
                    <h3 className="text-lg font-bold text-primary mb-2">Textos Principais</h3>
                    <div><label className="block text-sm font-bold text-slate-700 mb-1">Missão</label><textarea rows="3" value={formData.missao || ''} onChange={(e) => handleChange(null, 'missao', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none focus:border-primary" /></div>
                    <div><label className="block text-sm font-bold text-slate-700 mb-1">Visão</label><textarea rows="3" value={formData.visao || ''} onChange={(e) => handleChange(null, 'visao', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none focus:border-primary" /></div>
                    <div className="pt-4 border-t"><label className="block text-sm font-bold text-slate-700 mb-1">História da AJA - Parágrafo 1</label><textarea rows="3" value={formData.sobre?.texto1 || ''} onChange={(e) => handleChange('sobre', 'texto1', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none focus:border-primary" /></div>
                    <div><label className="block text-sm font-bold text-slate-700 mb-1">História da AJA - Parágrafo 2</label><textarea rows="3" value={formData.sobre?.texto2 || ''} onChange={(e) => handleChange('sobre', 'texto2', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none focus:border-primary" /></div>
                 </div>
                 
                 <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-4">
                    <h3 className="text-lg font-bold text-primary mb-2">Foto de Perfil</h3>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Imagem do Perfil do Alex</label>
                      <p className="text-xs text-slate-500 mb-2">Recomendado: Foto em formato retrato (vertical). O site ajustará o tamanho sem distorcer o rosto.</p>
                      <div className="flex gap-2">
                        <input value={formData.sobre?.imagemPerfil || ''} onChange={(e) => handleChange('sobre', 'imagemPerfil', e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 outline-none" placeholder="URL da foto" />
                        <label title="Enviar do computador" className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center shrink-0">
                           <Upload size={20} />
                           <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'sobre', 'imagemPerfil')} />
                        </label>
                      </div>
                      {formData.sobre?.imagemPerfil && <img src={formData.sobre.imagemPerfil} alt="Preview" className="mt-4 h-40 w-32 object-cover rounded-xl shadow-sm border" />}
                    </div>
                 </div>

                 {/* Editor de Valores Inegociáveis */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold text-primary">Os Valores Inegociáveis</h3>
                      <button onClick={() => handleChange(null, 'valores', [...(formData.valores || []), { titulo: "Novo Valor", desc: "Descrição aqui." }])} className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-100 text-sm"><Plus size={16}/> Adicionar Valor</button>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                       {(formData.valores || []).map((valor, vIdx) => (
                          <div key={vIdx} className="p-4 bg-slate-50 border rounded-xl relative group">
                            <button onClick={() => {
                               const newV = formData.valores.filter((_, i) => i !== vIdx);
                               handleChange(null, 'valores', newV);
                            }} className="absolute top-2 right-2 text-red-400 hover:text-red-600 bg-white p-1 rounded-md shadow-sm"><Trash2 size={14}/></button>
                            <div className="mb-2">
                              <label className="block text-xs font-bold text-slate-700 mb-1">Nome do Valor</label>
                              <input value={valor.titulo} onChange={(e) => {
                                 const newV = [...formData.valores];
                                 newV[vIdx].titulo = e.target.value;
                                 handleChange(null, 'valores', newV);
                              }} className="w-full p-2 border rounded-lg bg-white text-sm outline-none focus:border-primary" />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">Descrição</label>
                              <textarea rows="2" value={valor.desc} onChange={(e) => {
                                 const newV = [...formData.valores];
                                 newV[vIdx].desc = e.target.value;
                                 handleChange(null, 'valores', newV);
                              }} className="w-full p-2 border rounded-lg bg-white text-sm outline-none focus:border-primary" />
                            </div>
                          </div>
                       ))}
                    </div>
                 </div>
               </div>
            )}

            {activeTab === 'servicos' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                 {(formData.servicos || []).map((servico, sIdx) => (
                    <div key={sIdx} className="bg-white p-6 rounded-2xl shadow-sm border relative">
                       <h4 className="font-bold text-lg mb-4 text-primary">Serviço {sIdx + 1}</h4>
                       <div className="grid md:grid-cols-2 gap-4 mb-4">
                         <div><label className="block text-sm font-bold text-slate-700 mb-1">Título do Serviço</label><input value={servico.titulo} onChange={(e) => { const newS = [...formData.servicos]; newS[sIdx].titulo = e.target.value; handleChange(null, 'servicos', newS); }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none focus:border-primary" /></div>
                         <div><label className="block text-sm font-bold text-slate-700 mb-1">Problema / Quando Aparece</label><textarea rows="2" value={servico.quandoAparece} onChange={(e) => { const newS = [...formData.servicos]; newS[sIdx].quandoAparece = e.target.value; handleChange(null, 'servicos', newS); }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none focus:border-primary" /></div>
                         <div className="md:col-span-2"><label className="block text-sm font-bold text-slate-700 mb-1">Proposta de Solução</label><textarea rows="2" value={servico.proposta} onChange={(e) => { const newS = [...formData.servicos]; newS[sIdx].proposta = e.target.value; handleChange(null, 'servicos', newS); }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none focus:border-primary" /></div>
                       </div>
                       
                       <div className="mt-4 pt-4 border-t">
                         <div className="flex justify-between items-center mb-3">
                           <label className="block text-sm font-bold text-slate-700">Tópicos (Lista de Checks)</label>
                           <button onClick={() => {
                              const newS = [...formData.servicos];
                              if (!newS[sIdx].topicos) newS[sIdx].topicos = [];
                              newS[sIdx].topicos.push("Novo Tópico");
                              handleChange(null, 'servicos', newS);
                           }} className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-800"><Plus size={14}/> Add Tópico</button>
                         </div>
                         <div className="grid sm:grid-cols-2 gap-2">
                           {(servico.topicos || []).map((topico, tIdx) => (
                              <div key={tIdx} className="flex gap-2">
                                <input value={topico} onChange={(e) => {
                                   const newS = [...formData.servicos];
                                   newS[sIdx].topicos[tIdx] = e.target.value;
                                   handleChange(null, 'servicos', newS);
                                }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none focus:border-primary" />
                                <button onClick={() => {
                                   const newS = [...formData.servicos];
                                   newS[sIdx].topicos = newS[sIdx].topicos.filter((_, i) => i !== tIdx);
                                   handleChange(null, 'servicos', newS);
                                }} className="bg-red-50 text-red-500 p-2 rounded-lg hover:bg-red-100 shrink-0"><Trash2 size={16}/></button>
                              </div>
                           ))}
                         </div>
                       </div>
                    </div>
                 ))}
              </div>
            )}

            {activeTab === 'galeria' && (
               <div className="space-y-6 animate-in fade-in duration-300">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border">
                   <div>
                     <span className="text-slate-600 font-bold block">Fotos de Treinamentos e Palestras</span>
                     <span className="text-xs text-slate-500">Recomendado: Imagens horizontais (paisagem). O enquadramento é automático.</span>
                   </div>
                   <button onClick={() => handleChange(null, 'galeria', [...(formData.galeria || []), { titulo: "Novo Evento", url: "" }])} className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 shrink-0"><Plus size={18}/> Nova Foto</button>
                 </div>
                 
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                   {(formData.galeria || []).map((item, idx) => (
                     <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border relative flex flex-col group">
                       <button onClick={() => handleChange(null, 'galeria', formData.galeria.filter((_, i) => i !== idx))} className="absolute top-2 right-2 text-red-400 hover:text-red-600 p-1 bg-red-50 rounded-lg z-10"><Trash2 size={16}/></button>
                       <div className="mb-3 pr-8">
                         <label className="block text-xs font-bold text-slate-700 mb-1">Legenda (Aparece ao passar o mouse)</label>
                         <input value={item.titulo} onChange={(e) => { const newG = [...formData.galeria]; newG[idx].titulo = e.target.value; handleChange(null, 'galeria', newG); }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none" />
                       </div>
                       <div className="mb-4">
                         <label className="block text-xs font-bold text-slate-700 mb-1">Foto (Link ou Upload)</label>
                         <div className="flex gap-2">
                           <input value={item.url} onChange={(e) => { const newG = [...formData.galeria]; newG[idx].url = e.target.value; handleChange(null, 'galeria', newG); }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none" placeholder="URL da foto..." />
                           <label className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg cursor-pointer flex items-center justify-center shrink-0">
                              <Upload size={16} />
                              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleGalleryImageUpload(e, idx)} />
                           </label>
                         </div>
                       </div>
                       <div className="mt-auto aspect-video flex items-center justify-center border border-dashed rounded bg-slate-50 overflow-hidden">
                         {item.url ? <img src={item.url} alt={item.titulo} className="w-full h-full object-cover" /> : <span className="text-xs text-slate-400 font-bold">Sem imagem</span>}
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            )}

            {activeTab === 'clientes' && (
               <div className="space-y-6 animate-in fade-in duration-300">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border">
                   <div>
                     <span className="text-slate-600 font-bold block">Marcas Exibidas no Site</span>
                     <span className="text-xs text-slate-500">Recomendado: Logos com fundo transparente (PNG). Imagens nunca serão cortadas.</span>
                   </div>
                   <button onClick={() => handleChange(null, 'clientes', [...(formData.clientes || []), { nome: "Nova Empresa", logoUrl: "" }])} className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 shrink-0"><Plus size={18}/> Novo Cliente</button>
                 </div>
                 
                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                   {(formData.clientes || []).map((cliente, idx) => (
                     <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border relative">
                       <button onClick={() => handleChange(null, 'clientes', formData.clientes.filter((_, i) => i !== idx))} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><Trash2 size={16}/></button>
                       <div className="mb-2"><label className="block text-xs font-bold text-slate-700 mb-1">Nome da Empresa</label><input value={cliente.nome} onChange={(e) => { const newC = [...formData.clientes]; newC[idx].nome = e.target.value; handleChange(null, 'clientes', newC); }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none" /></div>
                       <div>
                         <label className="block text-xs font-bold text-slate-700 mb-1">Logo (Upload)</label>
                         <div className="flex gap-2">
                           <input value={cliente.logoUrl || ''} onChange={(e) => { const newC = [...formData.clientes]; newC[idx].logoUrl = e.target.value; handleChange(null, 'clientes', newC); }} className="w-full p-2 border rounded-lg bg-slate-50 text-sm outline-none" placeholder="Deixe vazio para gerar texto..." />
                           <label className="bg-blue-100 text-blue-700 p-2 rounded-lg cursor-pointer"><Upload size={16} /><input type="file" accept="image/*" className="hidden" onChange={(e) => handleClientImageUpload(e, idx)} /></label>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [siteData, setSiteData] = useState(DEFAULT_SITE_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [authMode, setAuthMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  
  const [wordIndex, setWordIndex] = useState(0);
  const [formStatus, setFormStatus] = useState('idle');
  const [formDataLead, setFormDataLead] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    desafio: ''
  });
  
  const SUPABASE_URL = 'https://zoqqbkpvjakubxgutjwg.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_3FUwSfWTi2N56x8hTNHGAA_YHk4iBvO';

  useEffect(() => {
    const fetchSupabase = async () => {
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/site_settings?id=eq.1&select=data`, {
          headers: { 
            'apikey': SUPABASE_KEY, 
            'Authorization': `Bearer ${SUPABASE_KEY}` 
          }
        });
        const json = await res.json();
        if (json && json.length > 0 && json[0].data) {
          // Assegura que propriedades profundas default continuem se não houver no BD antigo
          setSiteData({
             ...DEFAULT_SITE_DATA, 
             ...json[0].data,
             hero: { ...DEFAULT_SITE_DATA.hero, ...(json[0].data.hero || {}) },
             premissa: { ...DEFAULT_SITE_DATA.premissa, ...(json[0].data.premissa || {}) }
          });
        }
      } catch (error) {
        console.error("Erro ao carregar banco de dados Supabase:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSupabase();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    const rotater = setInterval(() => {
      setWordIndex(prev => (prev + 1) % (siteData.hero?.frasesRotativas?.length || 1));
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(rotater);
    };
  }, [siteData]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Dev' && password === 'Dev@2026') {
      setUserRole('dev');
      setAuthMode(false);
      setIsAdminOpen(true);
      setPassword('');
      setUsername('');
    } else if (username === 'Alex' && password === 'Alex@2026') {
      setUserRole('alex');
      setAuthMode(false);
      setIsAdminOpen(true);
      setPassword('');
      setUsername('');
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const handleSaveToSupabase = async (newData) => {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/site_settings?id=eq.1`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ data: newData, updated_at: new Date().toISOString() })
      });
      setSiteData(newData);
      setIsAdminOpen(false);
      alert("Sucesso! O site foi atualizado e salvo no Banco de Dados.");
    } catch (error) {
      console.error("Erro ao salvar no Supabase:", error);
      alert("Erro de conexão. Verifique sua internet.");
    }
  };

  const handleSubmitLead = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads_contato`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(formDataLead)
      });

      if (!res.ok) throw new Error('Falha ao enviar formulário');

      setFormStatus('success');
      setFormDataLead({ nome: '', email: '', telefone: '', empresa: '', desafio: '' });
    } catch (error) {
      console.error("Erro ao salvar lead no Supabase:", error);
      alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou use o WhatsApp.");
      setFormStatus('idle');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="font-bold tracking-widest text-sm uppercase animate-pulse">Carregando site...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      
      <style>{`
        :root {
          --primary: ${siteData.theme?.primary || '#172554'};
          --accent: ${siteData.theme?.accent || '#f59e0b'};
        }
        .bg-primary { background-color: var(--primary) !important; }
        .text-primary { color: var(--primary) !important; }
        .border-primary { border-color: var(--primary) !important; }
        
        .bg-accent { background-color: var(--accent) !important; }
        .text-accent { color: var(--accent) !important; }
        .border-accent { border-color: var(--accent) !important; }
      `}</style>

      <div className="fixed top-0 left-0 h-1 bg-accent z-[100] transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              {siteData.logoSite ? (
                <div className={`p-1.5 rounded-xl transition-colors ${!isScrolled ? 'bg-white/10 backdrop-blur-sm' : ''}`}>
                  <img src={siteData.logoSite} alt="Logo AJA" className="h-10 w-auto object-contain" />
                </div>
              ) : (
                <span className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  Alex<span className="text-accent font-light">Taveira</span>
                </span>
              )}
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('premissa')} className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>A Premissa</button>
              <button onClick={() => scrollToSection('sobre')} className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>AJA</button>
              <button onClick={() => scrollToSection('servicos')} className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>Soluções</button>
              <button onClick={() => scrollToSection('clientes')} className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>Clientes</button>
              <a href={`https://wa.me/55${siteData.contatos?.telefone?.replace(/\D/g,'')}?text=Olá, estava no site da AJA e gostaria de conversar.`} target="_blank" rel="noreferrer" className="bg-accent text-primary px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-lg hover:-translate-y-1 inline-block">
                Fale Comigo
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-slate-800' : 'text-white'}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t absolute w-full shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <button onClick={() => scrollToSection('premissa')} className="block w-full text-left p-3 text-slate-600 font-bold bg-slate-50 rounded-xl">A Premissa</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left p-3 text-slate-600 font-bold bg-slate-50 rounded-xl">AJA</button>
              <button onClick={() => scrollToSection('servicos')} className="block w-full text-left p-3 text-slate-600 font-bold bg-slate-50 rounded-xl">Soluções</button>
              <a href={`https://wa.me/55${siteData.contatos?.telefone?.replace(/\D/g,'')}?text=Olá, estava no site da AJA e gostaria de conversar.`} target="_blank" rel="noreferrer" className="block w-full text-center p-3 text-primary font-bold bg-accent rounded-xl mt-4">Fale Comigo</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary opacity-80 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-primary opacity-80 z-10"></div>
          <img src={siteData.hero?.backgroundImage} alt="Background" className="w-full h-full object-cover scale-105 animate-pulse" style={{ animationDuration: '20s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <Reveal delay={200} className="max-w-4xl">
            <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/20 text-accent font-bold text-sm mb-8 backdrop-blur-md">
              AJA Desenvolvimento Humano
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Desenvolver pessoas é o caminho mais eficaz para <br/>
              <span className="text-accent inline-block min-w-[300px] border-r-4 border-accent pr-2 animate-pulse">
                {(siteData.hero?.frasesRotativas || [])[wordIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-medium">
              {siteData.hero?.subtitulo}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('contato')} className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
                Agendar Diagnóstico <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('premissa')} className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm hover:-translate-y-1">
                Entender o Desafio
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="premissa" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">{siteData.premissa?.titulo || "O Problema Real"}</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">{siteData.premissa?.subtitulo || "O Maior Desafio do Nosso Tempo"}</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {siteData.premissa?.texto1}
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {siteData.premissa?.texto2}
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                <ShieldCheck className="text-accent shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="font-bold text-primary text-lg">{siteData.premissa?.destaqueTitulo || "Conformidade e Cuidado"}</h4>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    {siteData.premissa?.destaqueTexto || "Tornou-se essencial o processo de sensibilização, informação das pessoas e gestão especializada dos riscos psicossociais."}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative p-6 group">
                 <div className="absolute inset-0 bg-slate-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700 ease-out"></div>
                 <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform -rotate-2 group-hover:rotate-0 transition-all duration-700">
                   <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10"></div>
                   <img 
                     src={siteData.premissa?.imagem} 
                     alt="Reunião corporativa" 
                     className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                 </div>
                 <div className="absolute -bottom-4 -left-4 md:-left-8 bg-primary text-white p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                   <p className="font-bold text-5xl md:text-6xl text-accent mb-1 drop-shadow-lg">
                     <AnimatedNumber end={15} suffix="+" />
                   </p>
                   <p className="text-white/80 font-medium text-sm md:text-base leading-tight">Anos transformando<br/>pessoas e empresas</p>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Soluções Sob Medida</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">O que eu prezo e ofereço</h3>
            <p className="text-lg text-slate-600">
              Cada solução é pensada para resolver os desafios específicos do seu negócio, gerando resultados concretos e transformadores.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {(siteData.servicos || []).map((servico, idx) => {
              const IconTag = { Brain, Users, TrendingUp, HeartHandshake }[servico.icone] || Brain;
              return (
                <Reveal key={idx} delay={idx * 100} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-500 shrink-0">
                      <IconTag size={32} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary leading-tight group-hover:text-accent transition-colors duration-300">{servico.titulo}</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    <div className="bg-red-50/50 p-4 rounded-xl border border-red-100/50">
                      <span className="block text-xs font-bold text-red-800 uppercase tracking-wider mb-1">Quando isso aparece na empresa:</span>
                      <p className="text-slate-600 text-sm leading-relaxed">{servico.quandoAparece}</p>
                    </div>
                    
                    <div className="bg-green-50/50 p-4 rounded-xl border border-green-100/50">
                      <span className="block text-xs font-bold text-green-800 uppercase tracking-wider mb-1">Proposta de Solução:</span>
                      <p className="text-slate-600 text-sm leading-relaxed">{servico.proposta}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-3">O que engloba:</span>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {(servico.topicos || []).map((t, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <Check size={16} className="text-accent shrink-0 mt-0.5" />
                            <span className="leading-snug">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <Reveal className="order-2 lg:order-1">
               <h2 className="text-4xl font-bold text-primary mb-6">AJA Desenvolvimento Humano</h2>
               <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                 {siteData.sobre?.texto1}
               </p>
               <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                 {siteData.sobre?.texto2}
               </p>
             </Reveal>
             
             <Reveal delay={200} className="order-1 lg:order-2 relative group">
               <div className="absolute -inset-4 bg-accent opacity-20 rounded-[2.5rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-700 ease-out"></div>
               <div className="relative rounded-3xl shadow-2xl w-full aspect-square md:aspect-[4/5] overflow-hidden bg-slate-200">
                 <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10"></div>
                 <img src={siteData.sobre?.imagemPerfil} alt="Alex Taveira" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />
               </div>
             </Reveal>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
             <Reveal>
                <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-all duration-500 group h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Users className="text-primary" size={28} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-primary tracking-tight">Missão</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {siteData.missao}
                  </p>
                </div>
             </Reveal>
             
             <Reveal delay={200}>
                <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-all duration-500 group h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Brain className="text-primary" size={28} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-primary tracking-tight">Visão</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {siteData.visao}
                  </p>
                </div>
             </Reveal>
           </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
             <div className="text-center mb-16">
               <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">Nossos Valores Inegociáveis</h3>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {(siteData.valores || []).map((valor, idx) => (
                  <div key={idx} className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                     <div className="absolute top-0 left-0 w-full h-1 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                     <h4 className="text-lg font-bold text-accent mb-3">{valor.titulo}</h4>
                     <p className="text-white/70 text-sm leading-relaxed mt-auto">{valor.desc}</p>
                  </div>
                ))}
             </div>
          </Reveal>

          <Reveal className="mt-32">
             <div className="text-center mb-16">
               <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Desenvolvimento na Prática</h3>
               <p className="text-white/70 mt-4 text-lg">Momentos que transformam culturas organizacionais.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                {(siteData.galeria || []).map((item, idx) => (
                  <div key={idx} className="group relative h-80 md:h-[450px] overflow-hidden rounded-[2rem] bg-black/50 cursor-pointer shadow-2xl border border-white/10 hover:border-accent transition-all duration-700">
                    <img src={item.url} alt={item.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <span className="text-white font-bold text-2xl md:text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.titulo}</span>
                      <div className="w-16 h-1.5 bg-accent mt-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-100"></div>
                    </div>
                  </div>
                ))}
             </div>
          </Reveal>
        </div>
      </section>

      <section id="clientes" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Quem Confia</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-16">Empresas Atendidas</h3>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {(siteData.clientes || []).map((cliente, idx) => (
              <Reveal key={idx} delay={(idx % 5) * 50} className="w-full flex justify-center opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 p-4">
                {cliente.logoUrl ? (
                  <img src={cliente.logoUrl} alt={cliente.nome} className="max-h-16 max-w-[140px] object-contain" />
                ) : (
                  <span className="text-lg font-black text-slate-800 tracking-tight text-center leading-none">{cliente.nome}</span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {(siteData.secoesExtras || []).map((sec, idx) => (
        <section key={sec.id} style={{ backgroundColor: sec.corFundo || '#ffffff', color: sec.corTexto || '#0f172a' }} className="py-24 relative overflow-hidden border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <Reveal className={idx % 2 !== 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                  <h3 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ color: sec.corTexto }}>{sec.titulo}</h3>
                  <p className="text-lg leading-relaxed whitespace-pre-line opacity-90">{sec.conteudo}</p>
               </Reveal>
               
               {sec.imagem && (
                 <Reveal delay={200} className={idx % 2 !== 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                   <img src={sec.imagem} alt={sec.titulo} className="w-full aspect-video md:aspect-[4/3] object-cover rounded-[2rem] shadow-2xl" />
                 </Reveal>
               )}
            </div>
          </div>
        </section>
      ))}
      {/* FOOTER / CONTATO */}
      <section id="contato" className="bg-primary text-white pt-24 pb-12 relative overflow-hidden border-t border-black/20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Vamos Conversar?</h2>
              <p className="text-white/80 mb-8 leading-relaxed italic border-l-4 border-accent pl-4">
                "Minha intenção é criarmos alianças fortes sustentadas pela ética, respeito e a certeza de estarmos juntos contribuindo para um mundo melhor."
              </p>
              
              {formStatus === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/30 p-8 rounded-2xl flex flex-col items-center text-center animate-in zoom-in duration-300">
                  <CheckCircle2 size={56} className="text-green-400 mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">Solicitação Recebida!</h4>
                  <p className="text-green-100 mb-6">Agradecemos o contato. Em breve, o Alex ou nossa equipe retornará para agendarmos um bate-papo.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-sm font-bold text-accent hover:opacity-80 transition-colors uppercase tracking-widest">
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmitLead} 
                  className="space-y-4 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">Nome Completo</label>
                      <input required value={formDataLead.nome} onChange={e=>setFormDataLead({...formDataLead, nome: e.target.value})} type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">E-mail Corporativo</label>
                      <input required value={formDataLead.email} onChange={e=>setFormDataLead({...formDataLead, email: e.target.value})} type="email" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="email@empresa.com.br" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">Telefone / WhatsApp</label>
                      <input required value={formDataLead.telefone} onChange={e=>setFormDataLead({...formDataLead, telefone: e.target.value})} type="tel" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">Empresa</label>
                      <input required value={formDataLead.empresa} onChange={e=>setFormDataLead({...formDataLead, empresa: e.target.value})} type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Nome da empresa" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">Qual o principal desafio hoje?</label>
                    <select required value={formDataLead.desafio} onChange={e=>setFormDataLead({...formDataLead, desafio: e.target.value})} className="w-full bg-primary border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent transition-colors cursor-pointer outline-none">
                      <option value="" disabled>Selecione um assunto...</option>
                      <option value="nr01">Gestão de Riscos (NR-01)</option>
                      <option value="engajamento">Engajamento de Equipes</option>
                      <option value="lideranca">Liderança de Alta Performance</option>
                      <option value="palestra">Palestra / Treinamento In Company</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                  <button disabled={formStatus === 'submitting'} type="submit" className="w-full bg-accent text-primary font-bold text-lg p-4 rounded-xl hover:opacity-90 transition-all flex justify-center items-center gap-2 mt-4 shadow-xl disabled:opacity-70 group">
                    {formStatus === 'submitting' ? (
                      <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>Agendar Diagnóstico <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
            
            <Reveal delay={200}>
              <div className="bg-black/20 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
                <div className="space-y-6">
                  <a href={`https://wa.me/55${siteData.contatos?.telefone?.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                    <div className="w-14 h-14 bg-white/10 group-hover:bg-accent group-hover:text-primary rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">WhatsApp / Telefone</p>
                      <p className="text-xl font-medium">{siteData.contatos?.telefone}</p>
                    </div>
                  </a>
                  
                  <a href={`mailto:${siteData.contatos?.email}`} className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                    <div className="w-14 h-14 bg-white/10 group-hover:bg-accent group-hover:text-primary rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">E-mail</p>
                      <p className="text-lg font-medium break-all">{siteData.contatos?.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/10">
                    <a href={siteData.contatos?.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-all"><Linkedin size={20} /></a>
                    <a href={siteData.contatos?.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-all"><Facebook size={20} /></a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2026 Alex Taveira & AJA Desenvolvimento Humano. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span>ajads.com.br</span>
              <button onClick={() => setAuthMode(true)} className="flex items-center gap-2 hover:text-accent transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"><Lock size={14} /> Área Restrita</button>
            </div>
          </div>
        </div>
      </section>

      {authMode && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full animate-in zoom-in duration-200">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-4 mx-auto"><Lock size={24} /></div>
            <h3 className="text-xl font-bold text-center text-primary mb-2">Acesso Restrito</h3>
            <p className="text-sm text-slate-500 text-center mb-6">Área de gerenciamento do site</p>
            <form onSubmit={handleLogin}>
              <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Usuário" className="w-full p-3 border rounded-xl mb-3 bg-slate-50 outline-none focus:border-accent transition-colors text-center font-bold tracking-widest" autoFocus />
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Senha" className="w-full p-3 border rounded-xl mb-4 bg-slate-50 outline-none focus:border-accent transition-colors text-center font-bold tracking-widest" />
              <div className="flex gap-2">
                <button type="button" onClick={()=>setAuthMode(false)} className="w-full p-3 font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">Cancelar</button>
                <button type="submit" className="w-full p-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-colors">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isAdminOpen && (
        <AdminPanel 
          data={siteData} 
          onSave={handleSaveToSupabase} 
          onClose={() => setIsAdminOpen(false)} 
          supabaseUrl={SUPABASE_URL}
          supabaseKey={SUPABASE_KEY}
          userRole={userRole}
        />
      )}

    </div>
  );
}
