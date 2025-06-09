// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined, SearchOutlined, FolderOutlined, TagOutlined, SettingOutlined, LogoutOutlined, CheckCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography, Input, Button } from 'antd'; // Import Antd components
import { Link } from 'react-router-dom'; // For navigation links

const { Title } = Typography;

const Sidebar = ({ filterStatus, setFilterStatus, searchTerm, setSearchTerm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTaskFilterClick = (status) => {
    setFilterStatus(status);
    if (window.innerWidth <= 768) { 
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <aside className="sidebar-container">
      <div className="mobile-sidebar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-controls="sidebar-navigation" aria-expanded={isMobileMenuOpen}>
        <h3>Menu</h3>
        {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </div>

      <nav id="sidebar-navigation" className={window.innerWidth <= 768 && !isMobileMenuOpen ? 'sidebar-nav-hidden' : 'sidebar-nav-visible'}>
        <div className="sidebar-header">
          <Title level={2} className="sidebar-app-title">Sticky Wall</Title>
        </div>

        <div className="sidebar-section">
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search"
            className="sidebar-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search items"
          />
        </div>

        <div className="sidebar-section">
          <Title level={4} className="section-title">TASKS</Title>
          <ul className="sidebar-nav-list">
            <li>
              <Button type="text" className={`sidebar-nav-item ${filterStatus === 'all' ? 'active' : ''}`} onClick={() => handleTaskFilterClick('all')}>
                <FolderOutlined /> All Tasks
              </Button>
            </li>
            <li>
              <Button type="text" className={`sidebar-nav-item ${filterStatus === 'incomplete' ? 'active' : ''}`} onClick={() => handleTaskFilterClick('incomplete')}>
                <FolderOutlined /> Pending
              </Button>
            </li>
            <li>
              <Button type="text" className={`sidebar-nav-item ${filterStatus === 'completed' ? 'active' : ''}`} onClick={() => handleTaskFilterClick('completed')}>
                <CheckCircleOutlined /> Completed
              </Button>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <Title level={4} className="section-title">LISTS</Title>
          <ul className="sidebar-nav-list">
            <li><Button type="text" className="sidebar-nav-item"><FolderOutlined /> Personal</Button></li>
            <li><Button type="text" className="sidebar-nav-item"><FolderOutlined /> Work</Button></li>
            <li><Button type="text" className="sidebar-nav-item"><FolderOutlined /> List 1</Button></li>
            <li><Button type="text" className="sidebar-nav-item add-new-item"><PlusOutlined /> Add New List</Button></li>
          </ul>
        </div>

        <div className="sidebar-section">
          <Title level={4} className="section-title">TAGS</Title>
          <div className="tag-list">
            <Button type="text" className="tag-item">Tag 1</Button>
            <Button type="text" className="tag-item">Tag 2</Button>
            <Button type="text" className="tag-item add-tag-button"><PlusOutlined /> Add Tag</Button>
          </div>
        </div>

        <div className="sidebar-bottom-section">
          <ul className="sidebar-nav-list">
            <li><Button type="text" className="sidebar-nav-item"><SettingOutlined /> Settings</Button></li>
            <li><Button type="text" className="sidebar-nav-item"><LogoutOutlined /> Sign out</Button></li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;