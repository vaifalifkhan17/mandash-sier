const mindfulColors = ["#1688CF", "#14B8A6", "#6366F1", "#F59E0B", "#10B981", "#0EA5E9", "#8B5CF6", "#EF4444", "#22C55E", "#06B6D4", "#3B82F6", "#F97316", "#64748B", "#84CC16"];

    const divisionsData = [
      { code: "KOR", name: "Korporat & Direksi", icon: "briefcase-business" },
      { code: "KEU", name: "Keuangan", icon: "wallet" },
      { code: "OPS", name: "Operasional", icon: "activity" },
      { code: "AST", name: "Aset & Kawasan", icon: "building-2" },
      { code: "TNT", name: "Tenant & Pelanggan", icon: "users" },
      { code: "PRY", name: "Proyek & Pengembangan", icon: "kanban" },
      { code: "LEG", name: "Legal & Kepatuhan", icon: "scale" },
      { code: "SDM", name: "SDM & Organisasi", icon: "user-round-cog" },
      { code: "PGD", name: "Pengadaan & Vendor", icon: "shopping-cart" },
      { code: "RSK", name: "Risiko & Audit", icon: "shield-alert" },
      { code: "TIK", name: "Teknologi & Sistem", icon: "cpu" },
      { code: "SRV", name: "Layanan Penunjang", icon: "layers" }
    ];

    const divisionDashboardProfiles = {
        KOR: ['Executive Command Center', 'Corporate Performance'],
        KEU: ['Financial Dashboard', 'Budget & Cashflow'],
        OPS: ['Operational Performance', 'Service Reliability'],
        AST: ['Asset Utilization', 'Estate Monitoring'],
        TNT: ['Tenant Performance', 'Customer Pipeline'],
        PRY: ['Project Portfolio', 'Strategic Initiatives'],
        LEG: ['Legal & Compliance', 'Contract Portfolio'],
        SDM: ['People Analytics', 'Organization Health'],
        PGD: ['Procurement Pipeline', 'Vendor Performance'],
        RSK: ['Risk Radar', 'Audit Follow Up'],
        TIK: ['Infrastructure Pulse', 'Cyber Security Watch'],
        SRV: ['Support Service Portfolio', 'Commercial Revenue']
    };

    function createDashboardCards(division, dashName, prefix, cardColor, dashIdx) {
        const base = { divisionCode: division.code, dashboardName: dashName, widgetColor: cardColor };
        const variant = dashIdx + 1;
        const subjects = {
            KOR: ['Kinerja Korporat Bulanan', 'Prioritas Direksi', 'Kesehatan Perusahaan', 'Tindak Lanjut Strategis'],
            KEU: ['Laporan Keuangan Tahunan', 'Realisasi Anggaran', 'Arus Kas Operasional', 'Piutang Tenant'],
            OPS: ['Kinerja Operasional', 'SLA Layanan Kawasan', 'Gangguan Operasional', 'Produktivitas Layanan'],
            AST: ['Okupansi Aset', 'Utilisasi Kawasan', 'Kondisi Infrastruktur', 'Nilai Portofolio Aset'],
            TNT: ['Pertumbuhan Tenant', 'Retensi Pelanggan', 'Keluhan Tenant', 'Pipeline Prospek'],
            PRY: ['Portofolio Proyek', 'Progress Pengembangan', 'Deviasi Jadwal', 'Realisasi Investasi'],
            LEG: ['Kepatuhan Kontrak', 'Perkara Legal', 'Risiko Perjanjian', 'Dokumen Hukum'],
            PGD: ['Pipeline Pengadaan', 'Kinerja Vendor', 'Realisasi Belanja', 'Status Tender'],
            RSK: ['Peta Risiko Korporat', 'Temuan Audit', 'Tindak Lanjut Risiko', 'Kepatuhan Internal'],
            SRV: ['Pendapatan Jasa Penunjang', 'Kinerja Layanan', 'Kontrak Komersial', 'Portofolio Service'],
            TIK: ['Ketersediaan Infrastruktur', 'Insiden Keamanan Siber', 'SLA Sistem Informasi', 'Pemakaian Bandwidth'],
            SDM: ['Produktivitas Pegawai', 'Kehadiran Karyawan', 'Komposisi SDM', 'Kebutuhan Rekrutmen']
        };
        const labels = subjects[division.code] || [`Laporan ${division.name}`, `Kinerja ${division.name}`, `Status ${division.name}`, `Risiko ${division.name}`];
        const pick = (index) => labels[index % labels.length];
        return [
            { ...base, id: `${prefix}-hero`, type: 'hero-kpi', title: pick(0), value: `${94 + variant}.8%`, description: 'Capaian terhadap target periode berjalan', icon: 'gauge', colSpanNum: 1 },
            { ...base, id: `${prefix}-risk`, type: 'clean-metric', title: `Risiko ${pick(1)}`, value: `${5 + variant}`, description: 'Butuh atensi manajemen', icon: 'triangle-alert', trendNegative: true, colSpanNum: 1 },
            { ...base, id: `${prefix}-sla`, type: 'clean-metric', title: `SLA ${pick(2)}`, value: `${97 + variant}.2%`, description: 'Capaian layanan periode aktif', icon: 'timer', colSpanNum: 1 },
            { ...base, id: `${prefix}-util`, type: 'circular-stat', title: `Rasio ${pick(3)}`, subtitle: 'Perbandingan target dan realisasi', value: `${84 + variant}.4%`, colSpanNum: 1 },
            { ...base, id: `${prefix}-priority`, type: 'growth-list', title: `Prioritas ${division.code}`, subtitle: 'Isu utama berdasarkan tingkat urgensi', colSpanNum: 1 },
            { ...base, id: `${prefix}-finance`, type: 'stacked-kpi', title: `Ringkasan ${pick(0)}`, value: `Rp ${(18 + variant * 4).toFixed(1)} M`, subtitle: 'Target, realisasi, dan gap', colSpanNum: 2 },
            { ...base, id: `${prefix}-pipeline`, type: 'status-list', title: `Status ${pick(1)}`, subtitle: 'Progres aktivitas utama', colSpanNum: 2 },
            { ...base, id: `${prefix}-table`, type: 'mini-table', title: `Daftar ${pick(2)}`, subtitle: 'Item dengan dampak terbesar', colSpanNum: 2 },
            { ...base, id: `${prefix}-timeline`, type: 'timeline', title: `Agenda ${pick(3)}`, subtitle: 'Rencana eksekusi terdekat', colSpanNum: 2 },
            { ...base, id: `${prefix}-trend`, type: 'bar-chart', title: `Tren ${pick(0)}`, subtitle: 'Target, realisasi, dan progres bulanan', colSpanNum: 3 },
            { ...base, id: `${prefix}-heatmap`, type: 'heatmap', title: `Peta ${pick(1)}`, subtitle: 'Sebaran perhatian berdasarkan kategori', colSpanNum: 3 },
            { ...base, id: `${prefix}-executive`, type: 'executive-summary', title: `Ringkasan Eksekutif ${division.code}`, subtitle: `Snapshot ${dashName} untuk rapat direksi`, colSpanNum: 3 }
        ];
    }

    function enrichDivisionDashboards() {
        divisionsData.forEach((division, divIdx) => {
            const profile = divisionDashboardProfiles[division.code] || ['Ringkasan Kategori', 'Operasional'];
            division.applications = profile.map((dashName, dashIdx) => {
                const prefix = `${division.code.toLowerCase()}-${dashIdx}`;
                const cardColor = mindfulColors[(divIdx + dashIdx) % mindfulColors.length];
                return {
                    appId: `${prefix}-app`,
                    appName: dashName,
                    cards: createDashboardCards(division, dashName, prefix, cardColor, dashIdx)
                };
            });
        });
    }

    enrichDivisionDashboards();

    const roleProfiles = {
        'super-admin': {
            label: 'Super Admin',
            name: 'Super Admin EEDP',
            initials: 'SA',
            defaultView: 'admin',
            allowedViews: ['dashboard', 'divisions', 'workspace', 'layouts', 'admin'],
            scope: 'ALL'
        },
        direksi: {
            label: 'Direksi',
            name: 'Direksi SIER',
            initials: 'DS',
            defaultView: 'dashboard',
            allowedViews: ['dashboard', 'divisions', 'workspace', 'layouts'],
            scope: 'ALL'
        },
        'pic-divisi': {
            label: 'PIC Dashboard',
            name: 'PIC Dashboard',
            initials: 'PD',
            defaultView: 'divisions',
            allowedViews: ['divisions', 'workspace', 'layouts'],
            scope: 'DIVISION'
        }
    };

    const AUTH_STORAGE_KEY = 'eedp_active_user_v1';
    const DIVISION_SETTINGS_STORAGE_KEY = 'eedp_division_settings_v1';
    const DASHBOARD_SOURCES_STORAGE_KEY = 'eedp_dashboard_sources_v1';
    const API_CREDENTIALS_STORAGE_KEY = 'eedp_api_credentials_v1';
    const PORTAL_USERS_STORAGE_KEY = 'eedp_portal_users_v1';
    const SCOPE_RULES_STORAGE_KEY = 'eedp_scope_rules_v1';
    let currentUser = null;
    let divisionSettings = loadDivisionSettings();
    let dashboardSources = loadDashboardSources();
    let apiCredentials = loadApiCredentials();
    let portalUsers = loadPortalUsers();
    let scopeRules = loadScopeRules();
    let canvasWidgets = [];
    let selectedCanvasWidgetId = null;
    let draggedWidgetData = null; 
    let draggedCanvasIndex = null; 
    let openTreeDivisions = {};
    let activeAppliedLayoutId = 'executive';
    let activeWorkspaceLayoutId = 'executive';
    let apiTestPreviewPayload = null;
    const apiTablePages = {};
    const SAVED_LAYOUTS_STORAGE_KEY = 'mandash_saved_layouts_v6';

    let notifications = [
        { id: 1, title: "Laporan keuangan terbaru tersedia", time: "2 menit lalu" },
        { id: 2, title: "Tampilan ringkasan berhasil disimpan", time: "10 menit lalu" },
        { id: 3, title: "Status infrastruktur TIK 98.9%", time: "1 jam lalu" }
    ];

    let savedLayouts = [
        { 
            id: 'executive', 
            name: 'Ringkasan Eksekutif', 
            desc: 'Ringkasan indikator lintas kategori dari dashboard sumber', 
            widgets: getDefaultExecutiveWidgets()
        }
    ];

    window.addEventListener('blur', cancelActiveDragUI);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelActiveDragUI();
    });
    document.addEventListener('click', (event) => {
        if (selectedCanvasWidgetId && !event.target.closest('.canvas-widget-card')) {
            selectedCanvasWidgetId = null;
            renderCanvasWidgets();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (selectedCanvasWidgetId) {
                selectedCanvasWidgetId = null;
                renderCanvasWidgets();
            }
            cancelActiveDragUI();
            closeSaveLayoutModal();
            closeRenameLayoutModal();
            closeScopeRuleModal();
            closeScopeSettingModal();
            closeDashboardSourceModal();
            closePortalUserModal();
            closeUserProfileModal();
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        initNavigation();
        initAuthControls();
        renderDivisionsGrid();
        renderFullTreeLibrary();
        const widgetSearchInput = document.getElementById('widgetSearchInput');
        if (widgetSearchInput) {
            widgetSearchInput.addEventListener('input', renderFullTreeLibrary);
        }
        
        loadSavedLayoutsFromStorage();
        const initialLayout = savedLayouts.find(l => l.id === activeAppliedLayoutId) || savedLayouts[0];
        if (initialLayout) {
            activeWorkspaceLayoutId = initialLayout.id;
            canvasWidgets = deepCloneWidgets(initialLayout.widgets || []).map((w, i) => ({ 
                ...w, 
                gridRow: Number(w.gridRow) || Math.floor(i/3)+1, 
                gridCol: Number(w.gridCol) || (i%3)+1, 
                colSpan: getCardSpan(w) 
            }));
        }
        normalizeCanvasLayout();
        renderCanvasWidgets();
        renderSavedLayouts();
        renderNotifications();
        if (initialLayout) applyLayoutToDashboard(initialLayout.id, false);
        restoreAuthSession();
        renderAdminConsole();
    });

    function escapeHTML(value) {
        return String(value ?? '').replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[char]));
    }

    function escapeAttr(value) {
        return escapeHTML(value);
    }

    function loadDivisionSettings() {
        try {
            return JSON.parse(localStorage.getItem(DIVISION_SETTINGS_STORAGE_KEY) || '{}') || {};
        } catch (err) {
            return {};
        }
    }

    function persistDivisionSettings() {
        localStorage.setItem(DIVISION_SETTINGS_STORAGE_KEY, JSON.stringify(divisionSettings));
    }

    function loadDashboardSources() {
        try {
            return JSON.parse(localStorage.getItem(DASHBOARD_SOURCES_STORAGE_KEY) || '[]') || [];
        } catch (err) {
            return [];
        }
    }

    function persistDashboardSources() {
        localStorage.setItem(DASHBOARD_SOURCES_STORAGE_KEY, JSON.stringify(dashboardSources));
    }

    function loadApiCredentials() {
        try {
            return JSON.parse(localStorage.getItem(API_CREDENTIALS_STORAGE_KEY) || '[]') || [];
        } catch (err) {
            return [];
        }
    }

    function persistApiCredentials() {
        localStorage.setItem(API_CREDENTIALS_STORAGE_KEY, JSON.stringify(apiCredentials));
    }

    function getDefaultExecutiveWidgets() {
        return [
            { ...divisionsData[0].applications[0].cards[0], gridRow: 1, gridCol: 1, colSpan: 1 },
            { ...divisionsData[0].applications[0].cards[2], gridRow: 1, gridCol: 2, colSpan: 1 },
            { ...divisionsData[0].applications[0].cards[6], gridRow: 1, gridCol: 3, colSpan: 1 },
            { ...divisionsData[0].applications[0].cards[5], gridRow: 2, gridCol: 1, colSpan: 3 },
            { ...divisionsData[0].applications[0].cards[1], gridRow: 4, gridCol: 1, colSpan: 1 },
            { ...divisionsData[0].applications[0].cards[3], gridRow: 4, gridCol: 2, colSpan: 1 },
            { ...divisionsData[0].applications[0].cards[4], gridRow: 4, gridCol: 3, colSpan: 1 }
        ];
    }

    function getCredentialOptions(selectedId = '') {
        const options = [`<option value="">Token baru / belum dipilih</option>`];
        apiCredentials.forEach(credential => {
            const selected = credential.id === selectedId ? ' selected' : '';
            options.push(`<option value="${escapeAttr(credential.id)}"${selected}>${escapeHTML(credential.name)} - ${escapeHTML(credential.baseUrl)}</option>`);
        });
        return options.join('');
    }

    function findCredentialForSource(name, baseUrl) {
        const normalizedUrl = String(baseUrl || '').replace(/\/+$/, '');
        return apiCredentials.find(credential =>
            credential.name === name && String(credential.baseUrl || '').replace(/\/+$/, '') === normalizedUrl
        );
    }

    function getCredentialToken(credentialId) {
        return apiCredentials.find(credential => credential.id === credentialId)?.token || '';
    }

    function upsertApiCredential({ id, name, baseUrl, token }) {
        if (!token) return id || findCredentialForSource(name, baseUrl)?.id || '';
        const existing = id
            ? apiCredentials.find(credential => credential.id === id)
            : findCredentialForSource(name, baseUrl);
        const credentialId = existing?.id || `credential-${Date.now()}`;
        const nextCredential = {
            id: credentialId,
            name,
            baseUrl: String(baseUrl || '').replace(/\/+$/, ''),
            token,
            updatedAt: new Date().toISOString(),
            createdAt: existing?.createdAt || new Date().toISOString()
        };
        if (existing) {
            apiCredentials = apiCredentials.map(credential => credential.id === credentialId ? nextCredential : credential);
        } else {
            apiCredentials.unshift(nextCredential);
        }
        persistApiCredentials();
        return credentialId;
    }

    function getDefaultPortalUsers() {
        return [
            { id: 'user-super-admin', name: 'Super Admin EEDP', role: 'super-admin', division: 'ALL', status: 'Aktif' },
            { id: 'user-direksi', name: 'Direksi SIER', role: 'direksi', division: 'ALL', status: 'Aktif' },
            { id: 'user-pic-keu', name: 'PIC Keuangan', role: 'pic-divisi', division: 'KEU', status: 'Aktif' },
            { id: 'user-pic-tik', name: 'PIC Teknologi', role: 'pic-divisi', division: 'TIK', status: 'Aktif' }
        ];
    }

    function loadPortalUsers() {
        try {
            const parsed = JSON.parse(localStorage.getItem(PORTAL_USERS_STORAGE_KEY) || 'null');
            return Array.isArray(parsed) && parsed.length ? parsed : getDefaultPortalUsers();
        } catch (err) {
            return getDefaultPortalUsers();
        }
    }

    function persistPortalUsers() {
        localStorage.setItem(PORTAL_USERS_STORAGE_KEY, JSON.stringify(portalUsers));
    }

    function getDefaultScopeRules() {
        return [
            { id: 'scope-super-admin', role: 'super-admin', division: 'ALL', access: 'Kelola Penuh', status: 'Aktif' },
            { id: 'scope-direksi', role: 'direksi', division: 'ALL', access: 'Lihat & Susun Layout', status: 'Aktif' },
            { id: 'scope-pic-keu', role: 'pic-divisi', division: 'KEU', access: 'Kelola Kategori', status: 'Aktif' }
        ];
    }

    function loadScopeRules() {
        try {
            const parsed = JSON.parse(localStorage.getItem(SCOPE_RULES_STORAGE_KEY) || 'null');
            return Array.isArray(parsed) && parsed.length ? parsed : getDefaultScopeRules();
        } catch (err) {
            return getDefaultScopeRules();
        }
    }

    function persistScopeRules() {
        localStorage.setItem(SCOPE_RULES_STORAGE_KEY, JSON.stringify(scopeRules));
    }

    function getDivisionOptions(includeAll = true) {
        const allOption = includeAll ? '<option value="ALL">Semua Kategori</option>' : '';
        return `${allOption}${divisionsData.map(div => `<option value="${div.code}">${div.code} - ${escapeHTML(div.name)}</option>`).join('')}`;
    }

    function initAuthControls() {
        const roleSelect = document.getElementById('loginRoleSelect');
        const divisionSelect = document.getElementById('loginDivisionSelect');
        if (!roleSelect || !divisionSelect) return;
        divisionSelect.innerHTML = getDivisionOptions(true);
        const syncDivisionControl = () => {
            const profile = roleProfiles[roleSelect.value] || roleProfiles.direksi;
            const needsDivision = profile.scope === 'DIVISION';
            divisionSelect.disabled = !needsDivision;
            divisionSelect.value = needsDivision ? (divisionSelect.value === 'ALL' ? 'KEU' : divisionSelect.value) : 'ALL';
        };
        roleSelect.addEventListener('change', syncDivisionControl);
        syncDivisionControl();
    }

    function restoreAuthSession() {
        try {
            const savedUser = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || 'null');
            if (savedUser && roleProfiles[savedUser.role]) {
                applyUserSession(savedUser, false);
                return;
            }
        } catch (err) {
            localStorage.removeItem(AUTH_STORAGE_KEY);
        }
        document.body.classList.add('auth-pending');
    }

    function handleLogin(event) {
        event.preventDefault();
        const role = document.getElementById('loginRoleSelect')?.value || 'direksi';
        const profile = roleProfiles[role] || roleProfiles.direksi;
        const division = profile.scope === 'DIVISION'
            ? (document.getElementById('loginDivisionSelect')?.value || 'KEU')
            : 'ALL';
        const user = {
            role,
            division,
            name: profile.name,
            label: profile.label,
            initials: profile.initials
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        applyUserSession(user, true);
    }

    function handleLogout() {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        currentUser = null;
        document.body.classList.add('auth-pending');
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        lucide.createIcons();
    }

    function applyUserSession(user, showWelcome = true) {
        currentUser = user;
        document.body.classList.remove('auth-pending');
        updateRoleVisibility();
        updateUserChrome();
        renderDivisionsGrid();
        renderFullTreeLibrary();
        renderAdminConsole();
        const profile = roleProfiles[user.role] || roleProfiles.direksi;
        const defaultView = profile.defaultView || 'dashboard';
        switchMainView(defaultView);
        if (showWelcome) showToast(`Masuk sebagai ${profile.label}`, 'success');
    }

    function updateUserChrome() {
        const profile = roleProfiles[currentUser?.role] || roleProfiles.direksi;
        const scopeLabel = currentUser?.division && currentUser.division !== 'ALL' ? ` - ${currentUser.division}` : '';
        [
            ['sidebarUserAvatar', profile.initials],
            ['topbarUserAvatar', profile.initials],
            ['sidebarUserName', currentUser?.name || profile.name],
            ['sidebarUserRole', `${profile.label}${scopeLabel}`]
        ].forEach(([id, text]) => {
            const el = document.getElementById(id);
            if (el) el.innerText = text;
        });
        const avatar = document.getElementById('topbarUserAvatar');
        if (avatar) avatar.title = `${profile.label}${scopeLabel}`;
    }

    function openUserProfileModal() {
        if (!currentUser) return;
        const modal = document.getElementById('userProfileModal');
        if (!modal) return;
        const profile = roleProfiles[currentUser.role] || roleProfiles.direksi;
        const scopeLabel = currentUser.division === 'ALL' ? 'Semua Kategori' : currentUser.division;
        document.getElementById('profileNameInput').value = currentUser.name || profile.name;
        document.getElementById('profileInitialsInput').value = currentUser.initials || profile.initials;
        document.getElementById('profileRoleText').innerText = profile.label;
        document.getElementById('profileScopeText').innerText = scopeLabel;
        document.getElementById('profileAvatarPreview').innerText = currentUser.initials || profile.initials;
        modal.classList.add('show');
        lucide.createIcons();
    }

    function closeUserProfileModal() {
        const modal = document.getElementById('userProfileModal');
        if (modal) modal.classList.remove('show');
    }

    function saveUserProfile(event) {
        event.preventDefault();
        if (!currentUser) return;
        const name = document.getElementById('profileNameInput')?.value.trim();
        const initials = document.getElementById('profileInitialsInput')?.value.trim().toUpperCase();
        if (!name || !initials) {
            showToast('Nama dan inisial wajib diisi.', 'warning');
            return;
        }
        currentUser = {
            ...currentUser,
            name,
            initials: initials.slice(0, 3)
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser));
        updateUserChrome();
        closeUserProfileModal();
        showToast('Profil user disimpan.', 'success');
    }

    function updateRoleVisibility() {
        const allowedViews = getAllowedViews();
        document.querySelectorAll('.nav-link[data-view]').forEach(link => {
            const view = link.dataset.view;
            link.closest('.nav-item').style.display = allowedViews.includes(view) ? '' : 'none';
        });
        document.querySelectorAll('.switcher-btn[data-switch-view]').forEach(btn => {
            btn.style.display = allowedViews.includes(btn.dataset.switchView) ? '' : 'none';
        });
    }

    function getAllowedViews() {
        const profile = roleProfiles[currentUser?.role] || roleProfiles.direksi;
        return profile.allowedViews;
    }

    function canAccessView(viewName) {
        return getAllowedViews().includes(viewName === 'division-detail' ? 'divisions' : viewName);
    }

    function getVisibleDivisions() {
        if (!currentUser || currentUser.division === 'ALL') return divisionsData;
        return divisionsData.filter(div => div.code === currentUser.division);
    }

    function cancelActiveDragUI() {
        const ghost = document.getElementById('dragGhostPreview');
        if (ghost) {
            ghost.style.display = 'none';
            ghost.classList.remove('valid', 'invalid', 'neutral');
        }
        if (typeof removeGhostGrid === 'function') removeGhostGrid();
        document.querySelectorAll('.canvas-widget-card.dragging').forEach(el => el.classList.remove('dragging'));
        dragState = null;
        draggedWidgetData = null;
        draggedCanvasIndex = null;
        lastDragEvent = null;
        if (typeof ghostRaf !== 'undefined' && ghostRaf) {
            cancelAnimationFrame(ghostRaf);
            ghostRaf = 0;
        }
    }

    function switchMainView(viewName) {
        if (currentUser && !canAccessView(viewName)) {
            const fallback = (roleProfiles[currentUser.role] || roleProfiles.direksi).defaultView;
            showToast('Akses menu tidak tersedia untuk role ini.', 'warning');
            viewName = fallback;
        }
        cancelActiveDragUI();
        if (document.body.classList.contains('immersive-preview')) {
            toggleImmersivePreview();
        }

        document.querySelectorAll('.view-panel').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

        const targetPanel = document.getElementById(`view-${viewName}`);
        if (targetPanel) targetPanel.classList.add('active');

        const activeNavView = viewName === 'division-detail' ? 'divisions' : viewName;
        const navLink = document.querySelector(`.nav-link[data-view="${activeNavView}"]`);
        if (navLink) navLink.classList.add('active');

        document.querySelectorAll('.switcher-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.switchView === activeNavView);
        });
        if (viewName === 'dashboard') {
            document.getElementById('breadcrumbCurrent').innerText = 'Ringkasan Eksekutif';
            syncDashboardFromWorkspace();
        } else if (viewName === 'divisions') {
            document.getElementById('breadcrumbCurrent').innerText = 'Kategori Dashboard';
        } else if (viewName === 'workspace') {
            document.getElementById('breadcrumbCurrent').innerText = 'Tampilan Kustom';
            updateWorkspaceSubtitle();
        } else if (viewName === 'layouts') {
            document.getElementById('breadcrumbCurrent').innerText = 'Tampilan Tersimpan';
        } else if (viewName === 'division-detail') {
            document.getElementById('breadcrumbCurrent').innerText = 'Detail Kategori';
        }
        lucide.createIcons();
    }

    function updateWorkspaceSubtitle() {
        const activeLayout = savedLayouts.find(l => l.id === activeWorkspaceLayoutId);
        const sub = document.getElementById('workspaceModeSubtitle');
        if (sub) {
            sub.innerText = activeLayout ? `Mengubah tampilan: "${activeLayout.name}"` : 'Tampilan baru';
        }
    }

    function initNavigation() {
        document.querySelectorAll('.nav-link[data-view]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                switchMainView(link.getAttribute('data-view'));
            });
        });

        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.getElementById('sidebarToggleBtn');
        const toggleIcon = document.getElementById('toggleIcon');

        toggleBtn.addEventListener('click', () => {
            const isCollapsed = sidebar.classList.toggle('collapsed');
            toggleIcon.setAttribute('data-lucide', isCollapsed ? 'chevrons-right' : 'chevrons-left');
            lucide.createIcons();
        });
    }

    function renderDivisionsGrid() {
        const container = document.getElementById('divisionsGridContainer');
        if (!container) return;
        container.innerHTML = '';
        getVisibleDivisions().forEach((div, idx) => {
            const color = mindfulColors[idx % mindfulColors.length];
            const settings = divisionSettings[div.code] || {};
            const apps = getApplicationsForDivision(div);
            const dashboardCount = apps.length;
            const cardCount = apps.reduce((total, app) => total + app.cards.length, 0);
            const card = document.createElement('div');
            card.className = 'division-card';
            card.onclick = () => openDivisionDetail(div.code);
            card.innerHTML = `
                <div class="division-top">
                    <span class="division-code-tag" style="background:${color}15; color:${color}">${div.code}</span>
                    <i data-lucide="${div.icon}" style="width:18px;height:18px;color:${color};"></i>
                </div>
                <div class="division-name">
                    <h4>${escapeHTML(settings.title || div.name)}</h4>
                    <p>${dashboardCount} dashboard - ${cardCount} indikator</p>
                    ${settings.note ? `<small>${escapeHTML(settings.note)}</small>` : ''}
                </div>
                <div class="division-footer">
                    <span>${dashboardCount} Dashboard</span>
                    <span>${cardCount} Indikator</span>
                    ${settings.status ? `<span>${escapeHTML(settings.status)}</span>` : ''}
                </div>
                <button class="division-open-btn" type="button">
                    <i data-lucide="arrow-right"></i>
                    Buka Dashboard
                </button>
            `;
            container.appendChild(card);
        });
        lucide.createIcons();
    }

    function openDivisionDetail(divCode) {
        const div = getVisibleDivisions().find(d => d.code === divCode);
        if (!div) return;
        const settings = divisionSettings[div.code] || {};
        switchMainView('division-detail');
        document.getElementById('detailDivisionTitle').innerText = `${div.code} - ${settings.title || div.name}`;
        const apps = getApplicationsForDivision(div);
        document.getElementById('detailDivisionSubtitle').innerText = `${apps.length} dashboard - ${apps.reduce((total, app) => total + app.cards.length, 0)} indikator tersedia`;

        const container = document.getElementById('divisionDetailContentContainer');
        const sources = getDashboardSourcesForDivision(div.code);
        container.innerHTML = `
            ${renderDivisionManagementPanel(div)}
            ${renderDivisionSourcesPanel(div, sources)}
            ${apps.map((app) => `
            <div style="margin-bottom: 32px;">
                <h3 style="font-size: 14px; font-weight: 700; margin-bottom: 14px; color: var(--text-primary); display:flex; align-items:center; gap:8px;">
                    <span style="width:6px; height:16px; background:var(--indigo); border-radius:3px;"></span> ${app.appName}
                </h3>
                <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-items: stretch;">
                    ${app.cards.map((card) => {
                        const span = getCardSpan(card);
                        return `
                            <div style="grid-column: span ${span}; height: 100%;">
                                ${renderCardHTML({ ...card, colSpan: span })}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `).join('')}
        `;
        lucide.createIcons();
    }

    function getDashboardSourcesForDivision(divCode) {
        return dashboardSources.filter(source => source.divisionCode === divCode);
    }

    function getCardTypeFromVisual(visualType) {
        const typeMap = {
            kpi: 'clean-metric',
            summary: 'executive-summary',
            table: 'mini-table',
            bar: 'bar-chart',
            donut: 'circular-stat',
            status: 'status-list',
            timeline: 'timeline',
            heatmap: 'heatmap',
            progress: 'growth-list'
        };
        return typeMap[visualType] || 'mini-table';
    }

    function getVisualLabel(visualType) {
        const labelMap = {
            kpi: 'KPI Angka',
            summary: 'Ringkasan Eksekutif',
            table: 'Tabel Data',
            bar: 'Bar Chart',
            donut: 'Donut / Circle',
            status: 'Status List',
            timeline: 'Timeline',
            heatmap: 'Heatmap',
            progress: 'Progress List'
        };
        return labelMap[visualType] || 'Tabel Data';
    }

    function getCardSpanByType(cardType) {
        if (['bar-chart', 'heatmap', 'executive-summary'].includes(cardType)) return 3;
        if (cardType === 'mini-table') return 3;
        if (['status-list', 'timeline', 'stacked-kpi'].includes(cardType)) return 2;
        return 1;
    }

    function createCardsFromDashboardSource(source) {
        const sourceId = String(source.id || source.name || 'api-source').replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
        const color = mindfulColors[Math.abs(sourceId.length) % mindfulColors.length];
        const visualType = source.visualType || 'table';
        const cardType = source.cardType || getCardTypeFromVisual(visualType);
        const endpoint = source.endpoint || '';
        const isFullApiTable = cardType === 'mini-table' && isKavlingLegalityEndpoint(endpoint);
        const inferredSpan = isFullApiTable ? 3 : getCardSpanByType(cardType);
        const base = {
            divisionCode: source.divisionCode || 'API',
            dashboardName: source.name || 'Dashboard API',
            widgetColor: color,
            sourceId: source.id,
            sourceType: source.type,
            apiEndpoint: endpoint,
            apiUrl: source.url || '',
            apiParams: source.params || '',
            credentialId: source.credentialId || '',
            apiPreviewData: source.previewData || null
        };
        const card = {
            ...base,
            id: `${sourceId}-card`,
            type: cardType,
            title: source.cardTitle || source.name || 'Card Dashboard',
            subtitle: `${getVisualLabel(visualType)} - ${endpoint || 'Endpoint belum diisi'}`,
            value: cardType === 'clean-metric' ? 'API' : undefined,
            description: 'Mengikuti response endpoint API',
            visual: getVisualLabel(visualType),
            colSpanNum: isFullApiTable ? 3 : Number(source.colSpanNum) || inferredSpan
        };
        return [card];
    }

    function getApplicationsForDivision(div) {
        const groupedApps = new Map();
        getDashboardSourcesForDivision(div.code).forEach(source => {
            const key = `${source.name || 'Dashboard API'}::${source.url || ''}`;
            if (!groupedApps.has(key)) {
                groupedApps.set(key, {
                    appId: `source-${source.id}`,
                    appName: source.name || 'Dashboard API',
                    cards: []
                });
            }
            if (source.type === 'API') {
                groupedApps.get(key).cards.push(...createCardsFromDashboardSource(source));
            }
        });
        return [
            ...Array.from(groupedApps.values()),
            ...(div.applications || [])
        ];
    }

    function findCatalogCardById(cardId) {
        let foundCard = null;
        divisionsData.forEach(div => {
            getApplicationsForDivision(div).forEach(app => {
                const match = app.cards.find(card => card.id === cardId);
                if (match) foundCard = match;
            });
        });
        return foundCard;
    }

    function renderDivisionSourcesPanel(div, sources) {
        if (!sources.length) return '';
        return `
            <section class="division-source-panel">
                <div>
                    <h3>Sumber Dashboard ${escapeHTML(div.code)}</h3>
                    <p>Dashboard asli yang terhubung ke portal EEDP.</p>
                </div>
                <div class="source-link-list">
                    ${sources.map(source => `
                        <a class="source-link-card" href="${escapeAttr(source.url)}" target="_blank" rel="noopener noreferrer">
                            <span>
                                <strong>${escapeHTML(source.name)}</strong>
                                <small>${escapeHTML(source.type)} - ${escapeHTML(source.url)}</small>
                            </span>
                            <i data-lucide="external-link"></i>
                        </a>
                    `).join('')}
                </div>
            </section>
        `;
    }

    function renderDivisionManagementPanel(div) {
        if (!['super-admin', 'pic-divisi'].includes(currentUser?.role)) return '';
        const settings = divisionSettings[div.code] || {};
        return `
            <section class="division-manage-panel">
                <div>
                    <h3>Kelola Kategori Dashboard</h3>
                    <p>Pengaturan ini berlaku untuk kategori ${div.code} dan tersimpan di perangkat ini.</p>
                </div>
                <div class="division-manage-grid">
                    <label>
                        <span>Judul Publik Kategori</span>
                        <input class="form-input" id="divisionTitleInput" value="${escapeAttr(settings.title || div.name)}">
                    </label>
                    <label>
                        <span>Catatan PIC</span>
                        <input class="form-input" id="divisionNoteInput" value="${escapeAttr(settings.note || '')}" placeholder="Contoh: Update mingguan setiap Jumat">
                    </label>
                    <label>
                        <span>Status Data</span>
                        <select class="form-input" id="divisionStatusInput">
                            ${['Data Aktif', 'Perlu Review', 'Maintenance'].map(status => `<option value="${status}" ${settings.status === status ? 'selected' : ''}>${status}</option>`).join('')}
                        </select>
                    </label>
                    <button class="btn" onclick="saveDivisionSettings('${div.code}')">
                        <i data-lucide="save" style="width:14px;height:14px;"></i> Simpan Pengaturan
                    </button>
                </div>
            </section>
        `;
    }

    function saveDivisionSettings(divCode) {
        if (!['super-admin', 'pic-divisi'].includes(currentUser?.role)) {
            showToast('Akses pengaturan kategori tidak tersedia.', 'warning');
            return;
        }
        const title = document.getElementById('divisionTitleInput')?.value.trim();
        const note = document.getElementById('divisionNoteInput')?.value.trim();
        const status = document.getElementById('divisionStatusInput')?.value || 'Data Aktif';
        divisionSettings[divCode] = { title, note, status, updatedAt: new Date().toISOString() };
        persistDivisionSettings();
        renderDivisionsGrid();
        renderAdminConsole();
        showToast(`Pengaturan ${divCode} disimpan.`, 'success');
    }

    function renderAdminConsole(section = 'sources') {
        const workspace = document.getElementById('adminWorkspace');
        if (!workspace || currentUser?.role !== 'super-admin') return;
        openAdminSection(section, false);
    }

    function openAdminSection(section = 'sources', notify = true) {
        const workspace = document.getElementById('adminWorkspace');
        if (!workspace) return;
        if (currentUser?.role !== 'super-admin') {
            showToast('Admin Console hanya untuk Super Admin.', 'warning');
            return;
        }

        const sourceRows = dashboardSources.length
            ? dashboardSources.map(source => `
                <tr>
                    <td>${escapeHTML(source.name)}</td>
                    <td>${escapeHTML(source.divisionCode)}</td>
                    <td>${escapeHTML(source.cardTitle || '-')}</td>
                    <td><span class="admin-status-pill">${escapeHTML(getVisualLabel(source.visualType || 'table'))}</span></td>
                    <td><span class="admin-muted-text">${escapeHTML(source.endpoint || source.url)}</span></td>
                    <td><span class="admin-status-pill">${source.credentialId ? 'Token Siap' : 'Token Kosong'}</span></td>
                    <td class="admin-action-cell">
                        <a class="icon-btn admin-action-btn" href="${escapeAttr(source.url)}" target="_blank" rel="noopener noreferrer" title="Buka dashboard sumber"><i data-lucide="external-link"></i></a>
                        <button class="icon-btn admin-action-btn" onclick="editDashboardSource('${escapeAttr(source.id)}')" title="Edit card"><i data-lucide="pencil"></i></button>
                        <button class="icon-btn admin-action-btn" onclick="duplicateDashboardSource('${escapeAttr(source.id)}')" title="Duplikat card"><i data-lucide="copy"></i></button>
                        <button class="icon-btn admin-action-btn danger" onclick="deleteDashboardSource('${escapeAttr(source.id)}')" title="Hapus card"><i data-lucide="trash-2"></i></button>
                    </td>
                </tr>
            `).join('')
            : `<tr><td colspan="7">Belum ada card dashboard.</td></tr>`;

        const userRows = portalUsers.map(user => {
            const profile = roleProfiles[user.role] || roleProfiles.direksi;
            const scope = user.division === 'ALL' ? 'Semua Kategori' : user.division;
            return `
                <tr>
                    <td>${escapeHTML(user.name)}</td>
                    <td>${escapeHTML(profile.label)}</td>
                    <td>${escapeHTML(scope)}</td>
                    <td><span class="admin-status-pill">${escapeHTML(user.status || 'Aktif')}</span></td>
                    <td class="admin-action-cell">
                        <button class="icon-btn admin-action-btn danger" onclick="deletePortalUser('${escapeAttr(user.id)}')" title="Hapus user"><i data-lucide="trash-2"></i></button>
                    </td>
                </tr>
            `;
        }).join('');

        const scopeRows = scopeRules.map(rule => {
            const profile = roleProfiles[rule.role] || roleProfiles.direksi;
            const divisionLabel = rule.division === 'ALL' ? 'Semua Kategori' : rule.division;
            return `
                <tr>
                    <td>${escapeHTML(profile.label)}</td>
                    <td>${escapeHTML(divisionLabel)}</td>
                    <td><span class="admin-status-pill">${escapeHTML(rule.access)}</span></td>
                    <td><span class="admin-status-pill">${escapeHTML(rule.status || 'Aktif')}</span></td>
                    <td class="admin-action-cell">
                        <button class="icon-btn admin-action-btn" onclick="editScopeRule('${escapeAttr(rule.id)}')" title="Edit akses"><i data-lucide="pencil"></i></button>
                        <button class="icon-btn admin-action-btn danger" onclick="deleteScopeRule('${escapeAttr(rule.id)}')" title="Hapus akses"><i data-lucide="trash-2"></i></button>
                    </td>
                </tr>
            `;
        }).join('');

        const divisionSummaryRows = divisionsData.map(div => {
            const settings = divisionSettings[div.code] || {};
            const apps = getApplicationsForDivision(div);
            const indicatorCount = apps.reduce((total, app) => total + app.cards.length, 0);
            const sourceCount = getDashboardSourcesForDivision(div.code).length;
            return `
                <tr>
                    <td>${escapeHTML(div.code)}</td>
                    <td>${escapeHTML(settings.title || div.name)}</td>
                    <td>${apps.length}</td>
                    <td>${indicatorCount}</td>
                    <td>${sourceCount}</td>
                    <td><span class="admin-status-pill">${escapeHTML(settings.status || 'Data Aktif')}</span></td>
                </tr>
            `;
        }).join('');

        const divisionOptions = getDivisionOptions(false);

        const panels = {
            sources: `
                <div class="admin-section">
                    <div class="admin-section-head">
                        <h3>Card Dashboard</h3>
                        <button class="btn btn-sm" onclick="openDashboardSourceModal()"><i data-lucide="plus"></i> Card API</button>
                    </div>
                    <div class="admin-table-wrap">
                        <table class="admin-table">
                            <thead><tr><th>Dashboard Sumber</th><th>Kategori</th><th>Card</th><th>Tampilan</th><th>Endpoint</th><th>Token</th><th>Aksi</th></tr></thead>
                            <tbody>${sourceRows}</tbody>
                        </table>
                    </div>
                </div>
            `,
            users: `
                <div class="admin-section">
                    <div class="admin-section-head">
                        <h3>Manajemen User</h3>
                        <button class="btn btn-sm" onclick="openPortalUserModal()"><i data-lucide="user-plus"></i> User</button>
                    </div>
                    <div class="admin-table-wrap">
                        <table class="admin-table">
                            <thead><tr><th>Nama</th><th>Role</th><th>Scope</th><th>Status</th><th>Aksi</th></tr></thead>
                            <tbody>${userRows}</tbody>
                        </table>
                    </div>
                </div>
            `,
            scope: `
                <div class="admin-section">
                    <div class="admin-section-head">
                        <h3>Scope Kategori</h3>
                        <div class="admin-head-actions">
                            <button class="btn btn-sm" onclick="openScopeRuleModal()"><i data-lucide="plus"></i> Scope Kategori</button>
                            <button class="btn btn-secondary btn-sm" onclick="openScopeSettingModal()"><i data-lucide="settings"></i> Setting</button>
                        </div>
                    </div>
                    <div class="admin-section-subtitle" style="margin-top:0;">Ringkasan Kategori</div>
                    <div class="admin-table-wrap">
                        <table class="admin-table">
                            <thead><tr><th>Kode</th><th>Kategori</th><th>Dashboard</th><th>Indikator</th><th>Sumber</th><th>Status</th></tr></thead>
                            <tbody>${divisionSummaryRows}</tbody>
                        </table>
                    </div>
                </div>
            `,
            audit: `
                <div class="admin-section">
                    <div class="admin-section-head">
                        <h3>Audit Log</h3>
                        <button class="btn btn-secondary btn-sm" onclick="showToast('Audit log diekspor.', 'success')"><i data-lucide="download"></i> Ekspor</button>
                    </div>
                    <div class="audit-list">
                        <div><strong>${new Date().toLocaleString('id-ID')}</strong><span>${currentUser.name} membuka Admin Console</span></div>
                        <div><strong>Hari ini</strong><span>Direksi menerapkan tampilan Ringkasan Eksekutif</span></div>
                        <div><strong>Hari ini</strong><span>PIC KEU memperbarui status dashboard kategori</span></div>
                    </div>
                </div>
            `
        };

        workspace.innerHTML = panels[section] || panels.users;
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.adminTab === section);
        });
        lucide.createIcons();
        if (notify) showToast(`Membuka ${section === 'sources' ? 'Sumber Dashboard' : section === 'users' ? 'Manajemen User' : section === 'scope' ? 'Scope Kategori' : 'Audit Log'}.`, 'success');
    }

    function openDashboardSourceModal(sourceId = null) {
        const modal = document.getElementById('dashboardSourceModal');
        const divisionInput = document.getElementById('sourceDivisionInput');
        if (!modal || !divisionInput) return;
        const source = sourceId ? dashboardSources.find(item => item.id === sourceId) : null;
        document.getElementById('dashboardSourceModalTitle').innerText = source ? 'Edit Card Dashboard' : 'Tambah Card Dashboard';
        document.getElementById('sourceIdInput').value = source?.id || '';
        document.getElementById('sourceNameInput').value = source?.name || '';
        document.getElementById('sourceCardTitleInput').value = source?.cardTitle || '';
        document.getElementById('sourceUrlInput').value = source?.url || '';
        document.getElementById('sourceEndpointInput').value = source?.endpoint || '';
        document.getElementById('sourceVisualInput').value = source?.visualType || 'table';
        document.getElementById('sourceCredentialInput').innerHTML = getCredentialOptions(source?.credentialId || '');
        document.getElementById('sourceTokenInput').value = '';
        document.getElementById('sourceParamsInput').value = source?.params || '';
        apiTestPreviewPayload = source?.previewData || null;
        updateApiTestResult('', '');
        divisionInput.innerHTML = getDivisionOptions(false);
        if (source?.divisionCode) divisionInput.value = source.divisionCode;
        modal.classList.add('show');
        lucide.createIcons();
    }

    function closeDashboardSourceModal() {
        const modal = document.getElementById('dashboardSourceModal');
        if (modal) modal.classList.remove('show');
    }

    function buildDashboardApiUrl() {
        const baseUrl = document.getElementById('sourceUrlInput')?.value.trim();
        const endpoint = document.getElementById('sourceEndpointInput')?.value.trim();
        const params = document.getElementById('sourceParamsInput')?.value.trim();
        if (!baseUrl) return '';
        const normalizedBase = baseUrl.replace(/\/+$/, '');
        const normalizedEndpoint = endpoint ? `/${endpoint.replace(/^\/+/, '')}` : '';
        const query = params ? `?${params.replace(/^\?/, '')}` : '';
        return `${normalizedBase}${normalizedEndpoint}${query}`;
    }

    function updateApiTestResult(type, message) {
        const result = document.getElementById('apiTestResult');
        if (!result) return;
        result.className = `api-test-result ${type || ''}`.trim();
        result.innerText = message || '';
    }

    async function testDashboardApi() {
        const url = buildDashboardApiUrl();
        const credentialId = document.getElementById('sourceCredentialInput')?.value || '';
        const token = document.getElementById('sourceTokenInput')?.value.trim() || getCredentialToken(credentialId);
        if (!url || !token) {
            updateApiTestResult('warning', 'Base URL dan Bearer Token wajib diisi atau pilih Token Profile.');
            return;
        }

        updateApiTestResult('loading', 'Menghubungi API...');
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            const text = await response.text();
            let parsed = null;
            try {
                parsed = JSON.parse(text);
            } catch (err) {
                parsed = null;
            }

            if (!response.ok) {
                apiTestPreviewPayload = null;
                updateApiTestResult('danger', `Gagal ${response.status}: ${text.slice(0, 180) || response.statusText}`);
                return;
            }

            apiTestPreviewPayload = parsed;
            const count = Array.isArray(parsed?.data) ? parsed.data.length : Array.isArray(parsed) ? parsed.length : null;
            const suffix = count !== null ? ` - ${count} data terbaca` : ' - response JSON terbaca';
            updateApiTestResult('success', `Berhasil ${response.status}${suffix}.`);
        } catch (err) {
            apiTestPreviewPayload = null;
            updateApiTestResult('danger', `Gagal fetch dari browser: ${err.message}. Kemungkinan CORS, SSL, atau jaringan.`);
        }
    }

    function openPortalUserModal() {
        const modal = document.getElementById('portalUserModal');
        const divisionInput = document.getElementById('userDivisionInput');
        if (!modal || !divisionInput) return;
        document.getElementById('userNameInput').value = '';
        document.getElementById('userRoleInput').value = 'direksi';
        document.getElementById('userStatusInput').value = 'Aktif';
        divisionInput.innerHTML = getDivisionOptions(true);
        syncAdminUserDivision();
        modal.classList.add('show');
        lucide.createIcons();
    }

    function closePortalUserModal() {
        const modal = document.getElementById('portalUserModal');
        if (modal) modal.classList.remove('show');
    }

    function syncScopeDivisionControl() {
        const role = document.getElementById('scopeRoleInput')?.value || 'direksi';
        const divisionInput = document.getElementById('scopeDivisionInput');
        const accessInput = document.getElementById('scopeAccessInput');
        if (!divisionInput || !accessInput) return;
        if (!divisionInput.options.length) divisionInput.innerHTML = getDivisionOptions(true);
        const profile = roleProfiles[role] || roleProfiles.direksi;
        const needsDivision = profile.scope === 'DIVISION';
        divisionInput.disabled = !needsDivision;
        divisionInput.value = needsDivision ? (divisionInput.value === 'ALL' ? 'KEU' : divisionInput.value) : 'ALL';
        accessInput.value = role === 'super-admin' ? 'Kelola Penuh' : role === 'pic-divisi' ? 'Kelola Kategori' : 'Lihat & Susun Layout';
    }

    function openScopeRuleModal(ruleId = null) {
        const modal = document.getElementById('scopeRuleModal');
        if (!modal) return;
        resetScopeForm();
        const rule = ruleId ? scopeRules.find(item => item.id === ruleId) : null;
        document.getElementById('scopeModalTitle').innerText = rule ? 'Edit Akses Kategori' : 'Tambah Akses Kategori';
        if (rule) {
            document.getElementById('scopeRuleIdInput').value = rule.id;
            document.getElementById('scopeRoleInput').value = rule.role;
            syncScopeDivisionControl();
            document.getElementById('scopeDivisionInput').value = rule.division;
            document.getElementById('scopeAccessInput').value = rule.access;
            document.getElementById('scopeStatusInput').value = rule.status || 'Aktif';
        }
        modal.classList.add('show');
        lucide.createIcons();
    }

    function closeScopeRuleModal() {
        const modal = document.getElementById('scopeRuleModal');
        if (modal) modal.classList.remove('show');
    }

    function openScopeSettingModal() {
        const modal = document.getElementById('scopeSettingModal');
        const content = document.getElementById('scopeSettingContent');
        if (!modal || !content) return;
        const rows = scopeRules.map(rule => {
            const profile = roleProfiles[rule.role] || roleProfiles.direksi;
            const divisionLabel = rule.division === 'ALL' ? 'Semua Kategori' : rule.division;
            return `
                <tr>
                    <td>${escapeHTML(profile.label)}</td>
                    <td>${escapeHTML(divisionLabel)}</td>
                    <td><span class="admin-status-pill">${escapeHTML(rule.access)}</span></td>
                    <td><span class="admin-status-pill">${escapeHTML(rule.status || 'Aktif')}</span></td>
                    <td class="admin-action-cell">
                        <button class="icon-btn admin-action-btn" onclick="editScopeRule('${escapeAttr(rule.id)}')" title="Edit akses"><i data-lucide="pencil"></i></button>
                        <button class="icon-btn admin-action-btn danger" onclick="deleteScopeRule('${escapeAttr(rule.id)}')" title="Hapus akses"><i data-lucide="trash-2"></i></button>
                    </td>
                </tr>
            `;
        }).join('');
        content.innerHTML = `
            <div class="admin-section-subtitle" style="margin-top:0;">Daftar Akses Role & Kategori</div>
            <div class="admin-table-wrap scope-table-wrap">
                <table class="admin-table scope-table">
                    <thead><tr><th>Role</th><th>Kategori</th><th>Hak Akses</th><th>Status</th><th>Aksi</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
        modal.classList.add('show');
        lucide.createIcons();
    }

    function closeScopeSettingModal() {
        const modal = document.getElementById('scopeSettingModal');
        if (modal) modal.classList.remove('show');
    }

    function resetScopeForm() {
        const idInput = document.getElementById('scopeRuleIdInput');
        const roleInput = document.getElementById('scopeRoleInput');
        const statusInput = document.getElementById('scopeStatusInput');
        const divisionInput = document.getElementById('scopeDivisionInput');
        if (idInput) idInput.value = '';
        if (roleInput) roleInput.value = 'direksi';
        if (statusInput) statusInput.value = 'Aktif';
        if (divisionInput) divisionInput.innerHTML = getDivisionOptions(true);
        syncScopeDivisionControl();
    }

    function saveScopeRule(event) {
        event.preventDefault();
        if (currentUser?.role !== 'super-admin') {
            showToast('Hanya Super Admin yang bisa mengubah scope.', 'warning');
            return;
        }
        const id = document.getElementById('scopeRuleIdInput')?.value || `scope-${Date.now()}`;
        const role = document.getElementById('scopeRoleInput')?.value || 'direksi';
        const profile = roleProfiles[role] || roleProfiles.direksi;
        const division = profile.scope === 'DIVISION'
            ? (document.getElementById('scopeDivisionInput')?.value || 'KEU')
            : 'ALL';
        const access = document.getElementById('scopeAccessInput')?.value || 'Lihat';
        const status = document.getElementById('scopeStatusInput')?.value || 'Aktif';
        const nextRule = { id, role, division, access, status };
        const existingIndex = scopeRules.findIndex(rule => rule.id === id);
        if (existingIndex >= 0) {
            scopeRules[existingIndex] = nextRule;
        } else {
            scopeRules.unshift(nextRule);
        }
        persistScopeRules();
        renderAdminConsole('scope');
        closeScopeRuleModal();
        showToast('Rule scope kategori disimpan.', 'success');
    }

    function editScopeRule(ruleId) {
        openScopeRuleModal(ruleId);
    }

    function deleteScopeRule(ruleId) {
        if (scopeRules.length <= 1) {
            showToast('Minimal harus ada satu rule scope.', 'warning');
            return;
        }
        const rule = scopeRules.find(item => item.id === ruleId);
        scopeRules = scopeRules.filter(item => item.id !== ruleId);
        persistScopeRules();
        renderAdminConsole('scope');
        if (rule) showToast('Rule scope dihapus.', 'warning');
    }

    function syncAdminUserDivision() {
        const role = document.getElementById('userRoleInput')?.value || 'direksi';
        const divisionInput = document.getElementById('userDivisionInput');
        if (!divisionInput) return;
        const needsDivision = role === 'pic-divisi';
        divisionInput.disabled = !needsDivision;
        divisionInput.value = needsDivision ? (divisionInput.value === 'ALL' ? 'KEU' : divisionInput.value) : 'ALL';
    }

    function savePortalUser(event) {
        event.preventDefault();
        if (currentUser?.role !== 'super-admin') {
            showToast('Hanya Super Admin yang bisa menambah user.', 'warning');
            return;
        }
        const name = document.getElementById('userNameInput')?.value.trim();
        const role = document.getElementById('userRoleInput')?.value || 'direksi';
        const profile = roleProfiles[role] || roleProfiles.direksi;
        const division = profile.scope === 'DIVISION'
            ? (document.getElementById('userDivisionInput')?.value || 'KEU')
            : 'ALL';
        const status = document.getElementById('userStatusInput')?.value || 'Aktif';
        if (!name) {
            showToast('Nama user wajib diisi.', 'warning');
            return;
        }
        portalUsers.unshift({
            id: `user-${Date.now()}`,
            name,
            role,
            division,
            status
        });
        persistPortalUsers();
        renderAdminConsole('users');
        closePortalUserModal();
        showToast(`User "${name}" ditambahkan.`, 'success');
    }

    function deletePortalUser(userId) {
        if (portalUsers.length <= 1) {
            showToast('Minimal harus ada satu user.', 'warning');
            return;
        }
        const user = portalUsers.find(item => item.id === userId);
        portalUsers = portalUsers.filter(item => item.id !== userId);
        persistPortalUsers();
        renderAdminConsole('users');
        if (user) showToast(`User "${user.name}" dihapus.`, 'warning');
    }

    function saveDashboardSource(event) {
        event.preventDefault();
        if (currentUser?.role !== 'super-admin') {
            showToast('Hanya Super Admin yang bisa menambah sumber dashboard.', 'warning');
            return;
        }
        const name = document.getElementById('sourceNameInput')?.value.trim();
        const id = document.getElementById('sourceIdInput')?.value;
        const cardTitle = document.getElementById('sourceCardTitleInput')?.value.trim();
        const divisionCode = document.getElementById('sourceDivisionInput')?.value;
        const url = document.getElementById('sourceUrlInput')?.value.trim();
        const endpoint = document.getElementById('sourceEndpointInput')?.value.trim();
        const visualType = document.getElementById('sourceVisualInput')?.value || 'table';
        const selectedCredentialId = document.getElementById('sourceCredentialInput')?.value || '';
        const params = document.getElementById('sourceParamsInput')?.value.trim();
        const token = document.getElementById('sourceTokenInput')?.value.trim();

        if (!name || !divisionCode || !url) {
            showToast('Nama dashboard, kategori, dan URL wajib diisi.', 'warning');
            return;
        }

        if (!cardTitle || !endpoint) {
            showToast('Nama card dan endpoint wajib diisi untuk API.', 'warning');
            return;
        }

        if (!token && !selectedCredentialId) {
            showToast('Pilih Token Profile atau isi Bearer Token baru.', 'warning');
            return;
        }

        try {
            new URL(url);
        } catch (err) {
            showToast('URL belum valid. Gunakan format https://...', 'warning');
            return;
        }

        const sourceId = id || `source-${Date.now()}`;
        const existingSource = dashboardSources.find(source => source.id === sourceId);
        const credentialId = upsertApiCredential({
            id: selectedCredentialId || existingSource?.credentialId || '',
            name,
            baseUrl: url,
            token
        }) || selectedCredentialId || existingSource?.credentialId || '';
        const nextSource = {
            id: sourceId,
            name,
            cardTitle: cardTitle || name,
            divisionCode,
            type: 'API',
            url,
            endpoint,
            params,
            visualType,
            visualLabel: getVisualLabel(visualType),
            cardType: getCardTypeFromVisual(visualType),
            colSpanNum: getCardSpanByType(getCardTypeFromVisual(visualType)),
            credentialId,
            hasToken: Boolean(credentialId),
            previewData: apiTestPreviewPayload || existingSource?.previewData || null,
            createdAt: existingSource?.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        if (existingSource) {
            dashboardSources = dashboardSources.map(source => source.id === sourceId ? nextSource : source);
        } else {
            dashboardSources.unshift(nextSource);
        }
        persistDashboardSources();
        renderAdminConsole('sources');
        renderDivisionsGrid();
        renderFullTreeLibrary();
        closeDashboardSourceModal();
        showToast(`Card "${cardTitle || name}" ${existingSource ? 'diperbarui' : 'ditambahkan'}.`, 'success');
    }

    function editDashboardSource(sourceId) {
        const source = dashboardSources.find(item => item.id === sourceId);
        if (!source) {
            showToast('Card dashboard tidak ditemukan.', 'warning');
            return;
        }
        openDashboardSourceModal(sourceId);
    }

    function duplicateDashboardSource(sourceId) {
        const source = dashboardSources.find(item => item.id === sourceId);
        if (!source) {
            showToast('Card dashboard tidak ditemukan.', 'warning');
            return;
        }
        const copy = {
            ...source,
            id: `source-${Date.now()}`,
            cardTitle: `${source.cardTitle || source.name} Copy`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        dashboardSources.unshift(copy);
        persistDashboardSources();
        renderAdminConsole('sources');
        renderDivisionsGrid();
        renderFullTreeLibrary();
        showToast(`Card "${copy.cardTitle}" diduplikat.`, 'success');
    }

    function deleteDashboardSource(sourceId) {
        const source = dashboardSources.find(item => item.id === sourceId);
        dashboardSources = dashboardSources.filter(item => item.id !== sourceId);
        persistDashboardSources();
        renderAdminConsole('sources');
        renderDivisionsGrid();
        renderFullTreeLibrary();
        if (source) showToast(`Sumber "${source.name}" dihapus.`, 'warning');
    }

    function unwrapApiPayload(payload) {
        if (!payload) return null;
        if (Array.isArray(payload)) return payload;
        if (Array.isArray(payload.data)) return payload.data;
        if (payload.data && typeof payload.data === 'object') return payload.data;
        return payload;
    }

    function getApiRows(payload) {
        const data = unwrapApiPayload(payload);
        if (Array.isArray(data)) return data.filter(item => item && typeof item === 'object');
        if (data && typeof data === 'object') {
            const nested = Object.values(data).find(value => Array.isArray(value));
            if (nested) return nested.filter(item => item && typeof item === 'object');
        }
        return [];
    }

    function getApiTotalCount(payload, rows) {
        const explicitTotal = pickFirstValue(payload, ['total', 'data.total', 'meta.total', 'pagination.total', 'recordsTotal']);
        if (explicitTotal !== undefined) return Number(explicitTotal) || rows.length;
        const unwrapped = unwrapApiPayload(payload);
        if (Array.isArray(unwrapped)) return unwrapped.length;
        return rows.length;
    }

    function getNestedValue(source, path) {
        return String(path || '').split('.').reduce((value, key) => {
            if (value === null || value === undefined) return undefined;
            return value[key];
        }, source);
    }

    function pickFirstValue(source, paths) {
        for (const path of paths) {
            const value = getNestedValue(source, path);
            if (value !== null && value !== undefined && value !== '') return value;
        }
        return undefined;
    }

    function formatApiDate(value) {
        if (!value) return '-';
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return formatApiValue(value);
        return date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    function getStatusLabel(row) {
        return pickFirstValue(row, ['status_label', 'statusLabel', 'status.name', 'status', 'submission_status_label']) || '-';
    }

    function getKavlingAddress(row) {
        return pickFirstValue(row, [
            'kavling.address',
            'kavling.name',
            'kavling_address',
            'kavlingAddress',
            'address',
            'location'
        ]);
    }

    function isKavlingLegalityEndpoint(endpoint) {
        return /kavling-legalities/i.test(endpoint || '');
    }

    function buildApiTableColumns(endpoint, rows) {
        if (isKavlingLegalityEndpoint(endpoint)) {
            return [
                { label: 'No', getValue: (_row, index) => index + 1 },
                { label: 'Nama Tenant', getValue: row => pickFirstValue(row, ['company.name', 'tenant.name', 'tenant_name', 'company_name']) },
                { label: 'Nama Kavling', getValue: row => getKavlingAddress(row) },
                { label: 'Tanggal Masuk', getValue: row => formatApiDate(pickFirstValue(row, ['submitted_at', 'created_at', 'entry_date', 'tanggal_masuk'])) },
                { label: 'Tanggal Selesai', getValue: row => formatApiDate(pickFirstValue(row, ['completed_at', 'finished_at', 'approved_at', 'tanggal_selesai'])) },
                { label: 'Durasi', getValue: row => pickFirstValue(row, ['duration_label', 'duration', 'durasi']) },
                { label: 'Status', getValue: row => getStatusLabel(row), isStatus: true }
            ];
        }

        const firstRow = rows[0] || {};
        return Object.keys(firstRow).slice(0, 5).map(key => ({
            label: key.replace(/_/g, ' '),
            getValue: row => row[key]
        }));
    }

    function flattenApiObject(obj, prefix = '') {
        if (!obj || typeof obj !== 'object') return [];
        return Object.entries(obj).flatMap(([key, value]) => {
            const label = prefix ? `${prefix}.${key}` : key;
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                return flattenApiObject(value, label);
            }
            return [[label, Array.isArray(value) ? `${value.length} item` : value]];
        });
    }

    function formatApiValue(value) {
        if (value === null || value === undefined || value === '') return '-';
        if (typeof value === 'number') return Number.isInteger(value) ? value.toLocaleString('id-ID') : value.toLocaleString('id-ID', { maximumFractionDigits: 2 });
        if (Array.isArray(value)) return `${value.length} item`;
        if (typeof value === 'object') {
            return value.name || value.title || value.label || value.code || value.id || JSON.stringify(value);
        }
        return String(value);
    }

    function getApiTableKey(w) {
        return String(w.id || `${w.dashboardName}-${w.apiEndpoint}`).replace(/[^a-zA-Z0-9_-]/g, '-');
    }

    function setApiTablePage(cardKey, page) {
        apiTablePages[cardKey] = Math.max(1, Number(page) || 1);
        renderCanvasWidgets();
    }

    function getPaginationPages(currentPage, pageCount) {
        const maxButtons = 5;
        const start = Math.max(1, Math.min(currentPage - 2, pageCount - maxButtons + 1));
        const end = Math.min(pageCount, start + maxButtons - 1);
        return Array.from({ length: end - start + 1 }, (_item, index) => start + index);
    }

    function renderApiCardContent(w, division) {
        const allRows = getApiRows(w.apiPreviewData);
        const payload = unwrapApiPayload(w.apiPreviewData);
        const flat = flattenApiObject(payload).filter(([, value]) => value !== null && value !== undefined).slice(0, 6);
        const endpoint = w.apiEndpoint || 'Endpoint belum diisi';
        const emptyState = `
            <div class="api-card-empty">
                <i data-lucide="database"></i>
                <strong>Belum ada preview data</strong>
                <span>Test API lalu simpan card supaya contoh response asli tampil di sini.</span>
                <small>${escapeHTML(endpoint)}</small>
            </div>
        `;

        if (!w.apiPreviewData) {
            return `
                <div class="dense-card-head">
                    <div>
                        <span class="card-division-badge">${division}</span>
                        <h4>${escapeHTML(w.title)}</h4>
                        <p>${escapeHTML(endpoint)}</p>
                    </div>
                    <i data-lucide="database"></i>
                </div>
                ${emptyState}
            `;
        }

        if (w.type === 'mini-table') {
            const cardKey = getApiTableKey(w);
            const pageSize = 10;
            const totalRows = getApiTotalCount(w.apiPreviewData, allRows);
            const localPageCount = Math.max(1, Math.ceil(allRows.length / pageSize));
            const currentPage = Math.min(Math.max(1, Number(apiTablePages[cardKey]) || 1), localPageCount);
            apiTablePages[cardKey] = currentPage;
            const startIndex = (currentPage - 1) * pageSize;
            const rows = allRows.slice(startIndex, startIndex + pageSize);
            const columns = buildApiTableColumns(endpoint, rows);
            const shownStart = rows.length ? startIndex + 1 : 0;
            const shownEnd = Math.min(startIndex + rows.length, allRows.length || totalRows);
            const pageItems = getPaginationPages(currentPage, localPageCount);
            const canUseLocalPagination = allRows.length > pageSize;
            return `
                <div class="dense-card-head">
                    <div>
                        <span class="card-division-badge">${division}</span>
                        <h4>${escapeHTML(w.title)}</h4>
                        <p>${escapeHTML(endpoint)}</p>
                    </div>
                    <i data-lucide="table-2"></i>
                </div>
                ${rows.length && columns.length ? `
                    <table class="mini-widget-table api-widget-table">
                        <thead><tr>${columns.map(col => `<th>${escapeHTML(col.label)}</th>`).join('')}</tr></thead>
                        <tbody>
                            ${rows.map((row, index) => `<tr>${columns.map(col => {
                                const value = col.getValue(row, index);
                                const formatted = formatApiValue(value);
                                return `<td>${col.isStatus ? `<span>${escapeHTML(formatted)}</span>` : escapeHTML(formatted)}</td>`;
                            }).join('')}</tr>`).join('')}
                        </tbody>
                    </table>
                    <div class="api-table-footer">
                        <span>Menampilkan ${shownStart} - ${shownEnd} Dari ${totalRows} Data</span>
                        ${canUseLocalPagination ? `<div class="api-pagination">
                            <button type="button" ${currentPage <= 1 ? 'disabled' : ''} onclick="event.stopPropagation();setApiTablePage('${escapeAttr(cardKey)}', ${currentPage - 1})">Previous</button>
                            ${pageItems.map(page => `<button type="button" class="${page === currentPage ? 'active' : ''}" onclick="event.stopPropagation();setApiTablePage('${escapeAttr(cardKey)}', ${page})">${page}</button>`).join('')}
                            <button type="button" ${currentPage >= localPageCount ? 'disabled' : ''} onclick="event.stopPropagation();setApiTablePage('${escapeAttr(cardKey)}', ${currentPage + 1})">Next</button>
                        </div>` : ''}
                    </div>
                ` : emptyState}
            `;
        }

        return `
            <div class="dense-card-head">
                <div>
                    <span class="card-division-badge">${division}</span>
                    <h4>${escapeHTML(w.title)}</h4>
                    <p>${escapeHTML(endpoint)}</p>
                </div>
                <i data-lucide="${w.type === 'clean-metric' ? 'gauge' : 'database'}"></i>
            </div>
            <div class="api-field-list">
                ${flat.length ? flat.map(([key, value]) => `
                    <div>
                        <span>${escapeHTML(key.replace(/_/g, ' '))}</span>
                        <strong>${escapeHTML(formatApiValue(value))}</strong>
                    </div>
                `).join('') : emptyState}
            </div>
        `;
    }

    function renderCardHTML(w) {
        const wColor = w.widgetColor || '#38A9E8';
        const span = getCardSpan(w);
        const division = w.divisionCode || 'SYS';

        let cardClass = 'futuristic-card';
        let content = '';

        if (w.sourceType === 'API') {
            cardClass += ' card-dense card-api-preview';
            content = renderApiCardContent(w, division);
            return `
                <article class="${cardClass}" style="grid-column: span ${span}; --widget-color:${wColor};">
                    ${content}
                </article>
            `;
        }

        if (w.type === 'hero-kpi') {
            cardClass += ' card-kpi-hero card-kpi';
            content = `
                <div class="kpi-top">
                    <div class="kpi-icon-box">
                        <i data-lucide="file-text" style="width:18px;height:18px;"></i>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <span class="card-division-badge">${division}</span>
                    </div>
                </div>
                <div style="margin-top: 14px;">
                    <span class="kpi-label" style="font-size:11px; font-weight:700;">${w.title}</span>
                    <div class="kpi-value" style="font-size:26px; font-weight:800; margin-top:2px;">${w.value}</div>
                </div>
                <div class="mini-sparkline" aria-hidden="true">
                    ${[42, 58, 48, 72, 66, 84, 76].map(v => `<span style="height:${v}%;"></span>`).join('')}
                </div>
                <div class="kpi-footer" style="margin-top:10px;">
                    <span class="kpi-footer-text" style="font-size:10px;">${w.description || 'Mengikuti data dashboard sumber'}</span>
                    <b class="metric-delta positive">+4.2%</b>
                </div>
            `;
        } else if (w.type === 'clean-metric') {
            cardClass += ' card-kpi';
            const isNegative = w.trendNegative;
            content = `
                <div class="kpi-top">
                    <div class="kpi-icon-box">
                        <i data-lucide="${isNegative ? 'user' : 'shopping-bag'}" style="width:16px;height:16px;"></i>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <span class="card-division-badge">${division}</span>
                    </div>
                </div>
                <div class="kpi-value">${w.value}</div>
                <div class="compact-progress">
                    <i style="width:${isNegative ? 38 : 82}%;"></i>
                </div>
                <div class="kpi-footer">
                    <span style="font-size:10px; color:var(--text-secondary);">${w.description || 'Mengikuti status dashboard sumber'}</span>
                    <b class="metric-delta ${isNegative ? 'negative' : 'positive'}">${isNegative ? '+2 isu' : '+6.1%'}</b>
                </div>
            `;
        } else if (w.type === 'circular-stat') {
            cardClass += ' card-circular-stats';
            content = `
                <div class="kpi-top" style="align-items:flex-start;">
                    <div>
                        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
                            <span class="card-division-badge">${division}</span>
                            <span class="card-title" style="font-size:12px;">${w.title}</span>
                        </div>
                        <p style="font-size:9px; color:var(--text-muted); margin-top:1px;">${w.subtitle || 'Occupancy dan pemanfaatan aset'}</p>
                    </div>
                    <span class="period-chip">Periode</span>
                </div>
                <div class="circular-progress-wrap">
                    <svg width="110" height="110" viewBox="0 0 130 130" style="transform: rotate(-90deg);">
                        <circle cx="65" cy="65" r="50" stroke="#F1F5F9" stroke-width="12" fill="none"></circle>
                        <circle cx="65" cy="65" r="50" stroke="var(--indigo)" stroke-width="12" stroke-dasharray="314" stroke-dashoffset="60" stroke-linecap="round" fill="none"></circle>
                        <circle cx="65" cy="65" r="34" stroke="#EF4444" stroke-width="10" stroke-dasharray="213" stroke-dashoffset="90" stroke-linecap="round" fill="none"></circle>
                        <circle cx="65" cy="65" r="18" stroke="#CBD5E1" stroke-width="8" stroke-dasharray="113" stroke-dashoffset="50" stroke-linecap="round" fill="none"></circle>
                    </svg>
                    <div class="circular-center-text">
                        <div class="circular-center-val">${w.value}</div>
                        <div class="circular-center-sub">Indeks</div>
                    </div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:9px; font-weight:600; padding-top:4px; border-top:1px solid var(--border);">
                    <div style="display:flex; align-items:center; gap:3px;"><span style="width:5px;height:5px;border-radius:50%;background:var(--indigo);"></span> Data sumber <span style="color:var(--text-secondary); margin-left:2px;">terhubung</span></div>
                </div>
            `;
        } else if (w.type === 'bar-chart') {
            cardClass += ' card-bar-chart';
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
            content = `
                <div class="kpi-top" style="align-items:flex-start;">
                    <div>
                        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
                            <span class="card-division-badge">${division}</span>
                            <span class="card-title">${w.title}</span>
                        </div>
                        <p style="font-size:10px; color:var(--text-muted); margin-top:2px;">${w.subtitle || 'Revenue, risiko, dan progres lintas kategori'}</p>
                    </div>
                    <span class="period-chip">Periode</span>
                </div>
                <div style="display:flex; align-items:center; gap:12px; font-size:10px; margin-top:6px; color:var(--text-secondary);">
                    <span style="display:flex; align-items:center; gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:#CBD5E1;"></span> Target</span>
                    <span style="display:flex; align-items:center; gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:var(--indigo);"></span> Realisasi</span>
                </div>
                <div class="bar-chart-container">
                    ${months.map((m, idx) => `
                        <div class="bar-group">
                            <div style="display:flex; gap:4px; align-items:flex-end; height:100%;">
                                <div class="bar-track bar-fill-secondary" style="height:${[45, 75, 90, 40, 30, 80, 55][idx]}%;"></div>
                                <div class="bar-track bar-fill-primary" style="height:${[30, 85, 60, 25, 18, 65, 40][idx]}%;"></div>
                            </div>
                            <span class="bar-label">${m}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (w.type === 'growth-list') {
            cardClass += ' card-growth';
            const countries = [
                { name: 'Keuangan', code: 'KEU', percent: 85 },
                { name: 'Operasional', code: 'OPS', percent: 65 },
                { name: 'Legal', code: 'LEG', percent: 45 },
                { name: 'Pemasaran', code: 'PSR', percent: 30 }
            ];
            content = `
                <div class="kpi-top" style="align-items:flex-start;">
                    <div>
                        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
                            <span class="card-division-badge">${division}</span>
                            <span class="card-title" style="font-size:12px;">${w.title}</span>
                        </div>
                        <p style="font-size:9px; color:var(--text-muted); margin-top:1px;">${w.subtitle || 'Isu utama berdasarkan tingkat urgensi'}</p>
                    </div>
                    <span class="period-chip">Prioritas</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
                    ${countries.map(c => `
                        <div class="country-row" style="margin-top:4px;">
                            <div class="country-name" style="font-size:10px;">
                                <span>${c.code}</span>
                                <span>${c.name}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:6px;">
                                <div class="country-bar-track" style="width:65px;">
                                    <div class="country-bar-fill" style="width: ${c.percent}%;"></div>
                                </div>
                                <span style="font-size:9px; font-weight:700; color:var(--text-secondary); width:24px; text-align:right;">${c.percent}%</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="priority-summary-strip">
                    <span><b>3</b> kritikal</span>
                    <span><b>8</b> monitor</span>
                    <span><b>91%</b> progres</span>
                </div>
            `;
        } else if (w.type === 'stacked-kpi') {
            cardClass += ' card-dense card-stacked-kpi';
            const rows = [
                ['Target', 'Rp 32.4 M', 78],
                ['Realisasi', 'Rp 27.8 M', 68],
                ['Sisa Gap', 'Rp 4.6 M', 32]
            ];
            content = `
                <div class="dense-card-head">
                    <div>
                        <span class="card-division-badge">${division}</span>
                        <h4>${w.title}</h4>
                        <p>${w.subtitle || 'Ringkasan indikator nilai'}</p>
                    </div>
                    <i data-lucide="wallet"></i>
                </div>
                <div class="dense-main-value">${w.value}</div>
                <div class="dense-progress-list">
                    ${rows.map(row => `
                        <div class="dense-progress-row">
                            <span>${row[0]}</span>
                            <strong>${row[1]}</strong>
                            <div><i style="width:${row[2]}%;"></i></div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (w.type === 'status-list') {
            cardClass += ' card-dense card-status-list';
            const items = [
                ['Normal', 'Operasi utama', '72%'],
                ['Perlu Monitor', 'Issue berjalan', '19%'],
                ['Butuh Aksi', 'Tindak lanjut direksi', '9%']
            ];
            content = `
                <div class="dense-card-head">
                    <div>
                        <span class="card-division-badge">${division}</span>
                        <h4>${w.title}</h4>
                        <p>${w.subtitle || 'Daftar status utama'}</p>
                    </div>
                    <i data-lucide="list-checks"></i>
                </div>
                <div class="status-grid-list">
                    ${items.map((item, index) => `
                        <div class="status-grid-row">
                            <span class="status-dot status-${index}"></span>
                            <div>
                                <strong>${item[0]}</strong>
                                <small>${item[1]}</small>
                            </div>
                            <b>${item[2]}</b>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (w.type === 'mini-table') {
            cardClass += ' card-dense card-mini-table';
            const rows = [
                ['Tenant A', 'Kontrak', 'Tinggi'],
                ['Proyek B', 'Progress', 'Sedang'],
                ['Unit C', 'SLA', 'Normal'],
                ['Area D', 'Utilisasi', 'Naik']
            ];
            content = `
                <div class="dense-card-head">
                    <div>
                        <span class="card-division-badge">${division}</span>
                        <h4>${w.title}</h4>
                        <p>${w.subtitle || 'Tabel monitoring ringkas'}</p>
                    </div>
                    <i data-lucide="table-2"></i>
                </div>
                <table class="mini-widget-table">
                    <thead><tr><th>Objek</th><th>Kategori</th><th>Status</th></tr></thead>
                    <tbody>
                        ${rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td><span>${row[2]}</span></td></tr>`).join('')}
                    </tbody>
                </table>
            `;
        } else if (w.type === 'timeline') {
            cardClass += ' card-dense card-timeline';
            const items = [
                ['Hari ini', 'Validasi data dashboard sumber'],
                ['Minggu ini', 'Review tindak lanjut lintas fungsi'],
                ['Bulan ini', 'Laporan konsolidasi direksi']
            ];
            content = `
                <div class="dense-card-head">
                    <div>
                        <span class="card-division-badge">${division}</span>
                        <h4>${w.title}</h4>
                        <p>${w.subtitle || 'Agenda terdekat'}</p>
                    </div>
                    <i data-lucide="calendar-days"></i>
                </div>
                <div class="timeline-widget-list">
                    ${items.map(item => `
                        <div>
                            <span>${item[0]}</span>
                            <strong>${item[1]}</strong>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (w.type === 'heatmap') {
            cardClass += ' card-dense card-heatmap';
            const cells = [82, 44, 63, 28, 91, 57, 72, 36, 68, 49, 86, 54, 31, 77, 62];
            content = `
                <div class="dense-card-head">
                    <div>
                        <span class="card-division-badge">${division}</span>
                        <h4>${w.title}</h4>
                        <p>${w.subtitle || 'Sebaran status dan isu'}</p>
                    </div>
                    <i data-lucide="grid-3x3"></i>
                </div>
                <div class="heatmap-widget-grid">
                    ${cells.map((value, index) => `<span style="--heat:${value}%;" title="Area ${index + 1}: ${value}%">${value}</span>`).join('')}
                </div>
                <div class="heatmap-legend"><span>Rendah</span><i></i><span>Tinggi</span></div>
            `;
        } else if (w.type === 'executive-summary') {
            cardClass += ' card-dense card-executive-summary';
            const metrics = [
                ['Dashboard', '2', 'Aktif'],
                ['Indikator', '24', 'Tersedia'],
                ['Sumber', 'API', 'Siap'],
                ['Alert', '3', 'Prioritas']
            ];
            content = `
                <div class="dense-card-head">
                    <div>
                        <span class="card-division-badge">${division}</span>
                        <h4>${w.title}</h4>
                        <p>${w.subtitle || 'Snapshot eksekutif'}</p>
                    </div>
                    <i data-lucide="presentation"></i>
                </div>
                <div class="executive-summary-grid">
                    ${metrics.map(metric => `
                        <div>
                            <span>${metric[0]}</span>
                            <strong>${metric[1]}</strong>
                            <small>${metric[2]}</small>
                        </div>
                    `).join('')}
                </div>
                <div class="executive-summary-note">
                    <strong>Catatan</strong>
                    <span>Data dummy mengikuti struktur dashboard asal dan siap diganti API.</span>
                </div>
            `;
        }

        return `
            <article class="${cardClass}" style="grid-column: span ${span}; --widget-color:${wColor};">
                ${content}
            </article>
        `;
    }

    function normalizeSearchText(value) {
        return String(value || '').toLowerCase().trim();
    }

    function renderFullTreeLibrary() {
        const treeRoot = document.getElementById('fullTreeLibrary');
        if (!treeRoot) return;
        treeRoot.innerHTML = '';
        const query = normalizeSearchText(document.getElementById('widgetSearchInput')?.value);
        let renderedCount = 0;

        getVisibleDivisions().forEach((div, idx) => {
            const color = mindfulColors[idx % mindfulColors.length];
            const divisionMatch = normalizeSearchText(`${div.code} ${div.name}`).includes(query);
            const filteredApps = getApplicationsForDivision(div).map(app => {
                const appMatch = normalizeSearchText(app.appName).includes(query);
                const cards = !query || divisionMatch || appMatch
                    ? app.cards
                    : app.cards.filter(card => normalizeSearchText(`${card.title} ${card.subtitle || ''} ${card.description || ''}`).includes(query));
                return { ...app, cards };
            }).filter(app => app.cards.length > 0 || (!query && app.cards.length === 0));

            if (query && filteredApps.length === 0) return;
            renderedCount++;

            const li = document.createElement('div');
            li.className = `tree-division-item ${(query || openTreeDivisions[div.code]) ? 'open' : ''}`;
            
            const appHtml = filteredApps.map(app => `
                <div class="tree-app-item">
                    <div class="tree-app-title" style="color: ${color};"><i data-lucide="layout" style="width:10px;height:10px;"></i>${app.appName}</div>
                    <ul class="tree-cards-list">
                        ${app.cards.map(card => {
                            const isAdded = canvasWidgets.some(w => w.id === card.id);
                            return `
                                <li class="tree-card-node ${isAdded ? 'is-added' : ''}" ${!isAdded ? `draggable="true" ondragstart="onCatalogDragStart(event, '${card.id}')"` : ''}>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="drag-handle" title="Tarik indikator">
                                            <div class="dot-row"><span></span><span></span></div>
                                            <div class="dot-row"><span></span><span></span></div>
                                        </div>
                                        <span>${card.title}</span>
                                    </div>
                                    <div>
                                        ${isAdded ? 
                                            `<span class="tree-added-label">Sudah ada</span>` : 
                                            `<button class="btn btn-secondary btn-sm tree-add-btn" onclick="addWidgetDirect('${card.id}')"><i data-lucide="plus" style="width:10px;height:10px;"></i> Tambah</button>`
                                        }
                                    </div>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            `).join('');

            li.innerHTML = `
                <div class="tree-division-header" onclick="toggleTreeDivision('${div.code}', this)">
                    <span style="display:flex; align-items:center; gap:6px;">
                        <span style="width:8px; height:8px; border-radius:50%; background:${color}; display:inline-block;"></span>
                        <strong>${div.code}</strong> - ${div.name}
                    </span>
                    <i data-lucide="chevron-right" style="width:12px;height:12px;"></i>
                </div>
                <div class="tree-division-body">${appHtml}</div>
            `;
            treeRoot.appendChild(li);
        });
        if (!renderedCount) {
            treeRoot.innerHTML = `<li class="tree-empty-state">Indikator tidak ditemukan.</li>`;
        }
        lucide.createIcons();
    }

    function toggleTreeDivision(divCode, headerEl) {
        const item = headerEl.parentElement;
        const isOpen = item.classList.toggle('open');
        openTreeDivisions[divCode] = isOpen;
    }

    const GHOST_COLS = 3;
    const CANVAS_ROW_HEIGHT = 96;
    let dragState = null;
    let ghostRaf = 0;
    let lastDragEvent = null;

    function getCardSpan(card) {
        if (!card) return 1;
        if (Number(card.colSpan)) return Math.max(1, Math.min(GHOST_COLS, Number(card.colSpan)));
        if (Number(card.colSpanNum)) return Math.max(1, Math.min(GHOST_COLS, Number(card.colSpanNum)));
        if (card.type === 'bar-chart') return 3;
        return 1;
    }

    function getCardHeightRows(card) {
        if (!card) return 1;
        if (card.sourceType === 'API' && !card.apiPreviewData) return 3;
        if (card.sourceType === 'API' && card.type === 'mini-table' && isKavlingLegalityEndpoint(card.apiEndpoint)) return 6;
        if (card.sourceType === 'API' && card.type === 'mini-table') return 5;
        if (['bar-chart', 'heatmap', 'executive-summary'].includes(card.type)) return 4;
        return 3;
    }

    function normalizeCanvasLayout() {
        const occupied = {};

        canvasWidgets.sort((a, b) => {
            const rA = Number(a.gridRow) || 1;
            const rB = Number(b.gridRow) || 1;
            if (rA === rB) return (Number(a.gridCol) || 1) - (Number(b.gridCol) || 1);
            return rA - rB;
        });

        canvasWidgets.forEach(card => {
            let span = getCardSpan(card);
            card.colSpan = span;

            let row = Number(card.gridRow) || 1;
            let col = Number(card.gridCol) || 1;
            const heightRows = getCardHeightRows(card);

            let placed = false;
            while (!placed) {
                while (!placed && col + span - 1 <= GHOST_COLS) {
                    let hasCollision = false;
                    for (let r = row; r < row + heightRows; r++) {
                        for (let c = col; c < col + span; c++) {
                            if (occupied[`${r},${c}`]) {
                                hasCollision = true;
                                break;
                            }
                        }
                        if (hasCollision) break;
                    }

                    if (!hasCollision) {
                        for (let r = row; r < row + heightRows; r++) {
                            for (let c = col; c < col + span; c++) {
                                occupied[`${r},${c}`] = true;
                            }
                        }
                        card.gridRow = row;
                        card.gridCol = col;
                        placed = true;
                    } else {
                        col++;
                    }
                }
                if (!placed) {
                    row++;
                    col = 1;
                }
            }
        });
    }

    function getMaxRowsNeeded() {
        let maxR = 1;
        canvasWidgets.forEach(card => {
            const r = Number(card.gridRow) || 1;
            const h = getCardHeightRows(card);
            if (r + h - 1 > maxR) maxR = r + h - 1;
        });
        return Math.max(4, maxR);
    }

    function isPlacementFree(row, col, span, heightRows = 1, ignoredCard = null) {
        if (row < 1 || col < 1 || col + span - 1 > GHOST_COLS) return false;
        return !canvasWidgets.some(card => {
            if (card === ignoredCard) return false;
            const cRow = Number(card.gridRow || 1);
            const cCol = Number(card.gridCol || 1);
            const cSpan = getCardSpan(card);
            const cHeight = getCardHeightRows(card);

            const overlapX = col < cCol + cSpan && col + span > cCol;
            const overlapY = row < cRow + cHeight && row + heightRows > cRow;
            return overlapX && overlapY;
        });
    }

    function findFirstAvailablePosition(span, heightRows = 1, ignoredCard = null) {
        for (let row = 1; row <= 50; row++) {
            for (let col = 1; col <= GHOST_COLS; col++) {
                if (isPlacementFree(row, col, span, heightRows, ignoredCard)) {
                    return { row, col };
                }
            }
        }
        return { row: 1, col: 1 };
    }

    function getGridMetrics() {
        const grid = document.getElementById('canvasGrid');
        const rect = grid.getBoundingClientRect();
        const styles = getComputedStyle(grid);
        const gap = parseFloat(styles.columnGap) || 16;
        const padLeft = parseFloat(styles.paddingLeft) || 0;
        const padTop = parseFloat(styles.paddingTop) || 0;
        const innerWidth = rect.width - padLeft - (parseFloat(styles.paddingRight) || 0);
        const cellWidth = (innerWidth - gap * (GHOST_COLS - 1)) / GHOST_COLS;
        const rowHeight = CANVAS_ROW_HEIGHT;
        return { rect, gap, padLeft, padTop, cellWidth, rowHeight };
    }

    function pointerToCell(clientX, clientY, span, heightRows = 1, ignoredCard = null) {
        const m = getGridMetrics();
        const x = clientX - m.rect.left - m.padLeft;
        const y = clientY - m.rect.top - m.padTop;
        let col = Math.floor(x / (m.cellWidth + m.gap)) + 1;
        let row = Math.floor(y / (m.rowHeight + m.gap)) + 1;
        
        col = Math.max(1, col);
        row = Math.max(1, row);

        const target = canvasWidgets.find(card => {
            if (card === ignoredCard) return false;
            const cRow = Number(card.gridRow || 1);
            const cCol = Number(card.gridCol || 1);
            const cSpan = getCardSpan(card);
            const cHeight = getCardHeightRows(card);
            return row >= cRow && row < cRow + cHeight && col >= cCol && col < cCol + cSpan;
        });

        const withinColumns = col + span - 1 <= GHOST_COLS;
        const free = isPlacementFree(row, col, span, heightRows, ignoredCard);
        
        let valid = false;
        let isSwitch = false;

        if (withinColumns) {
            if (free) {
                valid = true;
            } else if (target && target !== ignoredCard) {
                valid = true;
                isSwitch = true;
            }
        }

        return { row, col, span, valid, target, isSwitch };
    }

    function createGhostGrid() {
        const grid = document.getElementById('canvasGrid');
        let overlay = document.getElementById('ghostGridOverlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'ghostGridOverlay';
            overlay.className = 'ghost-grid-overlay';
            grid.appendChild(overlay);
        }
        overlay.innerHTML = '';
        
        const totalRows = Math.max(4, getMaxRowsNeeded() + 1);
        grid.style.gridTemplateRows = `repeat(${totalRows}, ${CANVAS_ROW_HEIGHT}px)`;
        overlay.style.gridTemplateRows = `repeat(${totalRows}, ${CANVAS_ROW_HEIGHT}px)`;

        for (let r = 1; r <= totalRows; r++) {
            for (let c = 1; c <= GHOST_COLS; c++) {
                const cell = document.createElement('div');
                cell.className = 'ghost-grid-cell';
                cell.dataset.row = r;
                cell.dataset.col = c;
                overlay.appendChild(cell);
            }
        }
        overlay.classList.add('show');
    }

    function updateGhostGrid(target) {
        const overlay = document.getElementById('ghostGridOverlay');
        if (!overlay || !target) return;
        overlay.querySelectorAll('.ghost-grid-cell').forEach(cell => cell.className = 'ghost-grid-cell');
        const cells = overlay.querySelectorAll('.ghost-grid-cell');
        const heightRows = getCardHeightRows(target.card);

        cells.forEach(cell => {
            const r = Number(cell.dataset.row), c = Number(cell.dataset.col);
            if (r >= target.row && r < target.row + heightRows && c >= target.col && c < target.col + target.span) {
                const cellStatusClass = target.isSwitch ? 'invalid' : (target.valid ? 'valid' : 'invalid');
                cell.classList.add(cellStatusClass);
            }
        });
    }

    function removeGhostGrid() {
        const overlay = document.getElementById('ghostGridOverlay');
        if (overlay) overlay.remove();
    }

    function onCatalogDragStart(e, cardId) {
        const foundCard = findCatalogCardById(cardId);
        if (!foundCard) return;
        draggedWidgetData = { cardId, foundCard };
        draggedCanvasIndex = null;
        dragState = { card: foundCard, sourceIndex: null };
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', cardId);
        createGhostGrid();
        showGhostPreview(e, foundCard);
    }

    function onCanvasCardDragStart(e, index) {
        normalizeCanvasLayout();
        const foundCard = canvasWidgets[index];
        if (!foundCard) return;
        draggedCanvasIndex = index;
        draggedWidgetData = null;
        dragState = { card: foundCard, sourceIndex: index };
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(index));
        e.currentTarget.classList.add('dragging');
        createGhostGrid();
        showGhostPreview(e, foundCard);
    }

    function showGhostPreview(e, card) {
        const ghost = document.getElementById('dragGhostPreview');
        document.getElementById('ghostTitle').innerText = card.title;
        document.getElementById('ghostStatus').innerText = 'Pilih posisi penempatan';
        document.getElementById('ghostAdvice').innerText = '';
        ghost.className = 'drag-ghost-preview neutral';
        ghost.style.display = 'flex';
        lastDragEvent = e;
        scheduleGhostUpdate();
    }

    function scheduleGhostUpdate() {
        if (ghostRaf) return;
        ghostRaf = requestAnimationFrame(() => {
            ghostRaf = 0;
            if (!dragState || !lastDragEvent) return;
            const ev = lastDragEvent, card = dragState.card, span = getCardSpan(card);
            const heightRows = getCardHeightRows(card);
            const ghost = document.getElementById('dragGhostPreview');
            const statusEl = document.getElementById('ghostStatus');
            const adviceEl = document.getElementById('ghostAdvice');
            
            ghost.style.left = `${ev.clientX + 16}px`;
            ghost.style.top = `${ev.clientY + 16}px`;

            const target = pointerToCell(ev.clientX, ev.clientY, span, heightRows, dragState.sourceIndex !== null ? card : null);
            target.card = card;

            if (target.isSwitch) {
                ghost.className = 'drag-ghost-preview invalid';
                statusEl.innerText = 'Tukar posisi';
                adviceEl.innerText = `Menukar posisi dengan widget lain`;
            } else if (target.valid) {
                ghost.className = 'drag-ghost-preview valid';
                statusEl.innerText = 'Letakkan di sini';
                adviceEl.innerText = 'Posisi aman & pas';
            } else {
                ghost.className = 'drag-ghost-preview invalid';
                statusEl.innerText = 'Area tidak valid';
                adviceEl.innerText = 'Di luar batas grid kolom';
            }

            updateGhostGrid(target);
        });
    }

    function onCanvasDragOver(e) {
        e.preventDefault();
        if (!dragState) return;
        lastDragEvent = e;
        e.dataTransfer.dropEffect = dragState.sourceIndex !== null ? 'move' : 'copy';
        scheduleGhostUpdate();
    }

    function onCanvasDragLeave(e) {
        if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
    }

    function finishDrag() {
        const ghost = document.getElementById('dragGhostPreview');
        ghost.style.display = 'none';
        removeGhostGrid();
        document.querySelectorAll('.canvas-widget-card.dragging').forEach(el => el.classList.remove('dragging'));
        dragState = null;
        draggedWidgetData = null;
        draggedCanvasIndex = null;
        lastDragEvent = null;
    }

    function onCanvasCardDragEnd(e) { finishDrag(); }

    function ondropCanvasDropToEmpty(e) {
        e.preventDefault();
        if (!dragState) return;
        const card = dragState.card;
        const span = getCardSpan(card);
        const heightRows = getCardHeightRows(card);
        const target = pointerToCell(e.clientX, e.clientY, span, heightRows, dragState.sourceIndex !== null ? card : null);
        
        if (!target.valid) {
            showToast('Posisi tidak valid.', 'danger');
            finishDrag();
            return;
        }
        
        if (target.target && target.target !== card) {
            performSwapOrPlacement(target);
        } else {
            placeDraggedCard(target);
        }
    }

    function onCanvasCardDragOver(e, targetIndex) {
        e.preventDefault();
        e.stopPropagation();
        if (!dragState) return;
        lastDragEvent = e;
        scheduleGhostUpdate();
    }

    function onCanvasCardDragLeave(e) { e.currentTarget.classList.remove('drag-over-target'); }

    function onCanvasCardDropToSwap(e, targetIndex) {
        e.preventDefault();
        e.stopPropagation();
        if (!dragState) return;
        const targetCard = canvasWidgets[targetIndex];
        if (dragState.sourceIndex !== null) {
            if (dragState.sourceIndex === targetIndex) { finishDrag(); return; }
            const sourceCard = canvasWidgets[dragState.sourceIndex];
            const sourcePos = { row: sourceCard.gridRow, col: sourceCard.gridCol };
            const targetPos = { row: targetCard.gridRow, col: targetCard.gridCol };
            sourceCard.gridRow = targetPos.row; sourceCard.gridCol = targetPos.col;
            targetCard.gridRow = sourcePos.row; targetCard.gridCol = sourcePos.col;
            normalizeCanvasLayout();
            renderCanvasWidgets();
            syncActiveLayoutFromWorkspace();
            showToast('Posisi kartu berhasil ditukar.', 'success');
        } else {
            const span = getCardSpan(dragState.card);
            const targetPos = { row: targetCard.gridRow, col: targetCard.gridCol };
            const newCard = { ...dragState.card, gridRow: targetPos.row, gridCol: targetPos.col, colSpan: span };
            canvasWidgets[targetIndex] = newCard;
            normalizeCanvasLayout();
            renderCanvasWidgets();
                showToast(`Indikator diganti dengan "${newCard.title}".`, 'success');
        }
        finishDrag();
    }

    function performSwapOrPlacement(target) {
        const card = dragState.card;
        const sourceIndex = dragState.sourceIndex;
        const existingTarget = target.target;

        if (sourceIndex !== null) {
            const sourceCard = canvasWidgets[sourceIndex];
            const sRow = sourceCard.gridRow, sCol = sourceCard.gridCol;
            sourceCard.gridRow = existingTarget.gridRow;
            sourceCard.gridCol = existingTarget.gridCol;
            existingTarget.gridRow = sRow;
            existingTarget.gridCol = sCol;
            normalizeCanvasLayout();
            renderCanvasWidgets();
            syncActiveLayoutFromWorkspace();
            showToast('Posisi kartu berhasil ditukar.', 'success');
        } else {
            const idx = canvasWidgets.findIndex(w => w.id === existingTarget.id);
            if (idx !== -1) {
                const newCard = { ...card, gridRow: existingTarget.gridRow, gridCol: existingTarget.gridCol, colSpan: getCardSpan(card) };
                canvasWidgets[idx] = newCard;
                normalizeCanvasLayout();
                renderCanvasWidgets();
                syncActiveLayoutFromWorkspace();
                showToast(`Berhasil ditukar dengan "${existingTarget.title}".`, 'success');
            }
        }
        finishDrag();
    }

    function placeDraggedCard(target) {
        const card = dragState.card;
        const sourceIndex = dragState.sourceIndex;
        const span = getCardSpan(card);
        const heightRows = getCardHeightRows(card);

        if (sourceIndex !== null) {
            card.gridRow = target.row;
            card.gridCol = target.col;
            normalizeCanvasLayout();
            renderCanvasWidgets();
            syncActiveLayoutFromWorkspace();
            showToast('Indikator berhasil dipindahkan.', 'success');
        } else {
            const pos = findFirstAvailablePosition(span, heightRows);
            const newCard = { ...card, gridRow: pos.row, gridCol: pos.col, colSpan: span };
            if (canvasWidgets.some(w => w.id === newCard.id)) {
                showToast('Indikator sudah ada di dalam kanvas!', 'warning');
            } else {
                canvasWidgets.push(newCard);
                normalizeCanvasLayout();
                renderCanvasWidgets();
                syncActiveLayoutFromWorkspace();
                showToast(`Indikator "${newCard.title}" ditambahkan.`, 'success');
            }
        }
        finishDrag();
    }

    function addWidgetDirect(cardId) { addCardToCanvas(cardId); }

    function addCardToCanvas(cardId) {
        if (canvasWidgets.some(w => w.id === cardId)) {
            showToast('Indikator sudah ada di dalam kanvas!', 'warning');
            return;
        }
        const foundCard = findCatalogCardById(cardId);
        if (foundCard) {
            const span = getCardSpan(foundCard);
            const heightRows = getCardHeightRows(foundCard);
            const pos = findFirstAvailablePosition(span, heightRows);

            const newCard = { ...foundCard, gridRow: pos.row, gridCol: pos.col, colSpan: span };
            canvasWidgets.push(newCard);
            normalizeCanvasLayout();
            renderCanvasWidgets();
            syncActiveLayoutFromWorkspace();
            showToast(`Indikator "${foundCard.title}" ditambahkan.`, 'success');
        }
    }

    function removeWidgetFromCanvas(idx) {
        const removedWidget = canvasWidgets[idx];
        canvasWidgets.splice(idx, 1);
        if (removedWidget && removedWidget.id === selectedCanvasWidgetId) {
            selectedCanvasWidgetId = null;
        }
        normalizeCanvasLayout();
        renderCanvasWidgets();
        syncActiveLayoutFromWorkspace();
        showToast('Indikator dihapus dari kanvas', 'warning');
    }

    function resizeWidgetSpan(idx, span) {
        const widget = canvasWidgets[idx];
        if (!widget) return;
        widget.colSpan = Math.max(1, Math.min(GHOST_COLS, Number(span) || 1));
        widget.colSpanNum = widget.colSpan;
        normalizeCanvasLayout();
        renderCanvasWidgets();
        syncActiveLayoutFromWorkspace();
        showToast(`Lebar card diubah menjadi ${widget.colSpan} petak.`, 'success');
    }

    function clearCanvasWorkspace() {
        canvasWidgets = [];
        selectedCanvasWidgetId = null;
        renderCanvasWidgets();
        syncActiveLayoutFromWorkspace();
        showToast('Kanvas dikosongkan', 'warning');
    }

    function findWidgetDashboardName(cardId) {
        for (const division of divisionsData) {
            for (const app of (division.applications || [])) {
                if ((app.cards || []).some(card => card.id === cardId)) {
                    return app.appName;
                }
            }
        }
        return 'Dashboard Sumber';
    }

    function renderCanvasWidgets() {
        const grid = document.getElementById('canvasGrid');
        document.getElementById('widgetCountBadge').innerText = `${canvasWidgets.length} indikator aktif`;
        renderFullTreeLibrary();
        grid.innerHTML = '';
        if (canvasWidgets.length === 0) {
            grid.style.gridTemplateRows = 'minmax(420px, 1fr)';
            grid.innerHTML = `
                <div class="canvas-empty-state">
                    <i data-lucide="layout-grid"></i>
                    <strong>Belum ada indikator</strong>
                    <span>Tambahkan sumber dashboard di Super Admin, lalu pilih endpoint/card API dari panel kanan.</span>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        normalizeCanvasLayout();
        
        let overlay = document.getElementById('ghostGridOverlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'ghostGridOverlay';
            overlay.className = 'ghost-grid-overlay';
            grid.appendChild(overlay);
        }

        const totalRows = Math.max(4, getMaxRowsNeeded() + 1);
        grid.style.gridTemplateRows = `repeat(${totalRows}, ${CANVAS_ROW_HEIGHT}px)`;

        canvasWidgets.forEach((w, idx) => {
            const card = document.createElement('div');
            const isSelected = selectedCanvasWidgetId === w.id;
            const dashboardName = w.dashboardName || findWidgetDashboardName(w.id);
            const span = getCardSpan(w);
            const heightRows = getCardHeightRows(w);
            card.className = `canvas-widget-card canvas-span-${span} canvas-rows-${heightRows}${isSelected ? ' is-selected' : ''}`;
            card.style.gridColumn = `${w.gridCol} / span ${span}`;
            card.style.gridRow = `${w.gridRow} / span ${heightRows}`;
            card.setAttribute('draggable', 'true');
            card.setAttribute('ondragstart', `onCanvasCardDragStart(event, ${idx})`);
            card.setAttribute('ondragend', `onCanvasCardDragEnd(event)`);
            card.setAttribute('ondragover', `onCanvasCardDragOver(event, ${idx})`);
            card.setAttribute('ondragleave', `onCanvasCardDragLeave(event)`);
            card.setAttribute('ondrop', `onCanvasCardDropToSwap(event, ${idx})`);
            card.addEventListener('click', (event) => {
                event.stopPropagation();
                if (selectedCanvasWidgetId !== w.id) {
                    selectedCanvasWidgetId = w.id;
                    renderCanvasWidgets();
                }
            });

            const markup = renderCardHTML(w);
            card.innerHTML = `
                <div class="canvas-card-shell">
                    <div class="canvas-card-meta">
                        <span class="canvas-dashboard-name" title="${escapeAttr(dashboardName)}">${escapeHTML(dashboardName)}</span>
                        <div class="widget-card-toolbar">
                            <div class="widget-size-control" title="Atur lebar card">
                                ${[1, 2, 3].map(size => `<button class="${span === size ? 'active' : ''}" onclick="event.stopPropagation();resizeWidgetSpan(${idx}, ${size})" type="button">${size}</button>`).join('')}
                            </div>
                            <button class="icon-btn widget-action-btn canvas-move-btn" title="Pindahkan indikator" onclick="event.stopPropagation();"><i data-lucide="move" style="width:14px;height:14px;"></i></button>
                            <button class="icon-btn widget-action-btn" onclick="event.stopPropagation();removeWidgetFromCanvas(${idx})" title="Hapus indikator"><i data-lucide="x" style="width:13px;height:13px;"></i></button>
                        </div>
                    </div>
                    ${markup}
                </div>
            `;
            grid.appendChild(card);
        });
        lucide.createIcons();
    }

    function toggleImmersivePreview() {
        const body = document.body;
        const isImmersive = body.classList.toggle('immersive-preview');
        const btnText = document.getElementById('previewBtnText');
        
        if (isImmersive) {
            btnText.innerText = 'Keluar';
            showToast('Masuk mode pratinjau.', 'success');
        } else {
            btnText.innerText = 'Pratinjau';
            showToast('Kembali ke tampilan kustom', 'warning');
        }
        lucide.createIcons();
    }

    function deepCloneWidgets(widgets) {
        return (widgets || []).map(w => ({ ...w }));
    }

    function persistSavedLayouts() {
        try {
            localStorage.setItem(SAVED_LAYOUTS_STORAGE_KEY, JSON.stringify(savedLayouts));
        } catch (err) {
            console.warn('Tampilan tersimpan tidak dapat disimpan:', err);
        }
    }

    function loadSavedLayoutsFromStorage() {
        try {
            const raw = localStorage.getItem(SAVED_LAYOUTS_STORAGE_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed) || !parsed.length) return;
            savedLayouts = parsed.map(layout => ({
                ...layout,
                widgets: deepCloneWidgets(layout.widgets || [])
            }));
            const executiveLayout = savedLayouts.find(layout => layout.id === 'executive');
            if (executiveLayout && (!Array.isArray(executiveLayout.widgets) || executiveLayout.widgets.length === 0)) {
                executiveLayout.widgets = getDefaultExecutiveWidgets();
            }
        } catch (err) {
            console.warn('Data tampilan tersimpan tidak valid; memakai default.', err);
        }
    }

    function renderSavedLayouts() {
        const container = document.getElementById('savedLayoutsGridContainer');
        if (!container) return;
        container.innerHTML = '';
        savedLayouts.forEach(layout => {
            const isCurrentActive = activeAppliedLayoutId === layout.id;
            container.innerHTML += `
                <div class="layout-blueprint-card ${isCurrentActive ? 'is-active' : ''}">
                    <div class="saved-layout-header">
                        <div class="saved-layout-title-wrap">
                            <h4 class="saved-layout-title">
                                ${layout.name}
                                ${isCurrentActive ? '<span class="saved-layout-badge">Aktif</span>' : ''}
                            </h4>
                            <p class="saved-layout-desc">${layout.desc}</p>
                        </div>
                        <div class="saved-layout-icon-actions">
                            <button class="icon-btn saved-icon-btn saved-edit-icon" onclick="openRenameLayoutModal('${layout.id}')" title="Ubah nama">
                                <i data-lucide="edit-3"></i>
                            </button>
                            <button class="icon-btn saved-icon-btn saved-delete-icon" onclick="deleteSavedLayout('${layout.id}')" title="Hapus tampilan">
                                <i data-lucide="trash-2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="minimap-preview saved-layout-preview">
                        ${(layout.widgets || []).map((w, idx) => `<div style="flex:1; height:${[60, 85, 45][idx % 3]}%; background:${w.widgetColor || '#38A9E8'}; border-radius:4px 4px 2px 2px;"></div>`).join('')}
                    </div>
                    <div class="saved-layout-footer">
                        <button class="btn btn-secondary btn-sm saved-open-btn" onclick="openSavedLayoutWorkspace('${layout.id}')">
                            <i data-lucide="pencil"></i> Edit
                        </button>
                        <button class="btn btn-sm saved-apply-btn" onclick="applyLayoutToDashboard('${layout.id}')">
                            <i data-lucide="check-circle"></i> Terapkan
                        </button>
                    </div>
                </div>
            `;
        });
        lucide.createIcons();
    }

    function deleteSavedLayout(layoutId) {
        if (savedLayouts.length <= 1) {
            showToast('Minimal harus ada 1 saved layout.', 'warning');
            return;
        }
        if (layoutId === activeAppliedLayoutId) {
            showToast('Tidak dapat menghapus layout yang sedang aktif digunakan di dashboard.', 'danger');
            return;
        }

        const layoutIdx = savedLayouts.findIndex(l => l.id === layoutId);
        if (layoutIdx !== -1) {
            const deletedName = savedLayouts[layoutIdx].name;
            savedLayouts.splice(layoutIdx, 1);
            persistSavedLayouts();
            renderSavedLayouts();
            showToast(`Layout "${deletedName}" berhasil dihapus.`, 'success');
        }
    }

    function openSavedLayoutWorkspace(layoutId) {
        const layout = savedLayouts.find(item => item.id === layoutId);
        if (!layout) return;
        activeWorkspaceLayoutId = layout.id;
        canvasWidgets = deepCloneWidgets(layout.widgets || []).map((w, i) => ({
            ...w,
            gridRow: Number(w.gridRow) || Math.floor(i/3)+1,
            gridCol: Number(w.gridCol) || (i%3)+1,
            colSpan: getCardSpan(w)
        }));
        normalizeCanvasLayout();
        renderCanvasWidgets();
        renderSavedLayouts();
        switchMainView('workspace');
        showToast(`Tampilan "${layout.name}" dibuka untuk diedit`, 'success');
    }

    function applyLayoutToDashboard(layoutId, navigate = true) {
        const layout = savedLayouts.find(l => l.id === layoutId);
        if (!layout) return;
        activeAppliedLayoutId = layout.id;
        activeWorkspaceLayoutId = layout.id;
        const subtitle = document.getElementById('dashboardSubtitle');
        if (subtitle) subtitle.innerText = `Tampilan aktif: "${layout.name}" - ${layout.desc}`;
        
        canvasWidgets = deepCloneWidgets(layout.widgets || []).map((w, i) => ({
            ...w,
            gridRow: Number(w.gridRow) || Math.floor(i/3)+1,
            gridCol: Number(w.gridCol) || (i%3)+1,
            colSpan: getCardSpan(w)
        }));
        normalizeCanvasLayout();
        syncDashboardFromWorkspace();
        renderSavedLayouts();
        if (navigate) {
            showToast(`Ringkasan diperbarui dengan "${layout.name}".`, 'success');
            switchMainView('dashboard');
        }
    }

    function syncDashboardFromWorkspace() {
        const dynContainer = document.getElementById('dashboardDynamicContainer');
        if (!dynContainer) return;

        dynContainer.innerHTML = '';
        if (canvasWidgets.length === 0) {
            dynContainer.innerHTML = `<div style="grid-column: span 3; text-align:center; padding: 40px; color: var(--text-secondary);">Belum ada indikator aktif. Tambahkan sumber dashboard dan susun card dari Tampilan Kustom.</div>`;
            return;
        }

        normalizeCanvasLayout();
        const sortedWidgets = [...canvasWidgets].sort((a, b) => {
            if (a.gridRow === b.gridRow) return a.gridCol - b.gridCol;
            return a.gridRow - b.gridRow;
        });

        let maxR = 4;
        sortedWidgets.forEach(w => {
            const r = Number(w.gridRow) || 1;
            const h = getCardHeightRows(w);
            if (r + h - 1 > maxR) maxR = r + h - 1;
        });
        dynContainer.style.gridTemplateRows = `repeat(${maxR}, ${CANVAS_ROW_HEIGHT}px)`;

        sortedWidgets.forEach(w => {
            const spanNum = getCardSpan(w);
            const cardEl = document.createElement('div');
            cardEl.style.gridColumn = `span ${spanNum}`;
            cardEl.style.gridRow = `span ${getCardHeightRows(w)}`;
            cardEl.innerHTML = renderCardHTML(w);
            dynContainer.appendChild(cardEl);
        });
        lucide.createIcons();
    }

    function handleSaveLayoutAction() {
        cancelActiveDragUI();
        const activeLayout = savedLayouts.find(l => l.id === activeWorkspaceLayoutId);
        if (activeLayout) {
            activeLayout.widgets = deepCloneWidgets(canvasWidgets);
            persistSavedLayouts();
            renderSavedLayouts();
            showToast(`Layout "${activeLayout.name}" berhasil diperbarui.`, 'success');
        } else {
            openSaveLayoutModal();
        }
    }

    function openNewLayoutModal() {
        cancelActiveDragUI();
        activeWorkspaceLayoutId = null; 
        const modal = document.getElementById('saveLayoutModal');
        document.getElementById('saveLayoutNameInput').value = '';
        document.getElementById('saveLayoutDescInput').value = '';
        document.getElementById('saveModalTitle').innerText = 'Buat Tampilan Baru';
        modal.classList.add('show');
        lucide.createIcons();
    }

    function openSaveLayoutModal() {
        const modal = document.getElementById('saveLayoutModal');
        const activeLayout = savedLayouts.find(l => l.id === activeWorkspaceLayoutId);
        document.getElementById('saveLayoutNameInput').value = activeLayout ? activeLayout.name : '';
        document.getElementById('saveLayoutDescInput').value = activeLayout ? activeLayout.desc : '';
        document.getElementById('saveModalTitle').innerText = activeLayout ? 'Perbarui Tampilan' : 'Simpan Tampilan Baru';
        modal.classList.add('show');
        lucide.createIcons();
    }

    function closeSaveLayoutModal() {
        const modal = document.getElementById('saveLayoutModal');
        if (modal) modal.classList.remove('show');
    }

    function confirmSaveWorkspaceLayout() {
        const name = document.getElementById('saveLayoutNameInput').value.trim() || 'Tampilan Kustom';
        const desc = document.getElementById('saveLayoutDescInput').value.trim() || 'Tampilan ringkasan kustom';

        let targetLayout = savedLayouts.find(l => l.id === activeWorkspaceLayoutId);

        if (targetLayout) {
            targetLayout.name = name;
            targetLayout.desc = desc;
            targetLayout.widgets = deepCloneWidgets(canvasWidgets);
            showToast(`Tampilan "${name}" berhasil diperbarui.`, 'success');
        } else {
            const newLayoutId = 'layout_' + Date.now();
            const newLayout = {
                id: newLayoutId,
                name,
                desc,
                widgets: deepCloneWidgets(canvasWidgets)
            };
            savedLayouts.push(newLayout);
            activeWorkspaceLayoutId = newLayoutId;
            activeAppliedLayoutId = newLayoutId;
            showToast(`Tampilan baru "${name}" berhasil dibuat.`, 'success');
        }
        
        persistSavedLayouts();
        renderSavedLayouts();
        closeSaveLayoutModal();
        updateWorkspaceSubtitle();
    }

    function openRenameLayoutModal(layoutId) {
        cancelActiveDragUI();
        const layout = savedLayouts.find(l => l.id === layoutId);
        if (!layout) return;
        document.getElementById('renameLayoutIdInput').value = layout.id;
        document.getElementById('renameLayoutNameInput').value = layout.name;
        document.getElementById('renameLayoutModal').classList.add('show');
    }

    function closeRenameLayoutModal() {
        const modal = document.getElementById('renameLayoutModal');
        if (modal) modal.classList.remove('show');
        cancelActiveDragUI();
    }

    function confirmRenameLayout() {
        const layoutId = document.getElementById('renameLayoutIdInput').value;
        const newName = document.getElementById('renameLayoutNameInput').value.trim();
        if (!newName) {
            showToast('Nama layout tidak boleh kosong!', 'danger');
            return;
        }

        const layout = savedLayouts.find(l => l.id === layoutId);
        if (layout) {
            layout.name = newName;
            if (activeAppliedLayoutId === layoutId) {
                const subtitle = document.getElementById('dashboardSubtitle');
                if (subtitle) subtitle.innerText = `Tampilan aktif: "${layout.name}" - ${layout.desc}`;
            }
            persistSavedLayouts();
            renderSavedLayouts();
            closeRenameLayoutModal();
            updateWorkspaceSubtitle();
        showToast(`Layout berhasil diganti nama menjadi "${newName}".`, 'success');
        }
    }

    function toggleNotificationDropdown() { 
        document.getElementById('notifDropdown').classList.toggle('show'); 
    }

    function renderNotifications() {
        const list = document.getElementById('notifListContainer');
        if (!list) return;
        list.innerHTML = '';
        notifications.forEach(n => {
            list.innerHTML += `<div class="notification-item"><h5>${n.title}</h5><span>${n.time}</span></div>`;
        });
        document.getElementById('notifBadge').innerText = notifications.length;
    }
    
    function markAllRead() { 
        notifications = []; 
        renderNotifications(); 
        showToast('Prioritas ditandai selesai', 'success'); 
    }

    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span>${message}</span>`;
        container.appendChild(toast);
        lucide.createIcons();
        setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 250); }, 2800);
    }

    function toggleDarkMode() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateDarkModeIcon();
        lucide.createIcons();
        showToast(newTheme === 'dark' ? 'Mode gelap aktif' : 'Mode terang aktif', 'success');
    }

    function updateDarkModeIcon() {
        const newTheme = document.body.getAttribute('data-theme') || 'light';
        const icon = document.getElementById('darkModeIcon');
        if (icon) icon.setAttribute('data-lucide', newTheme === 'dark' ? 'sun' : 'moon');
    }
