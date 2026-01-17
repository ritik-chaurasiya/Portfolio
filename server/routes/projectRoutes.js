const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET: all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error('GET /api/projects error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST: create new project (testing / admin)
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error('POST /api/projects error:', err);
    res.status(400).json({ message: 'Invalid data' });
  }
});

module.exports = router;
