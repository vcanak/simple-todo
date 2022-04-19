package com.todobackend.todo.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.todobackend.todo.model.Task;
import com.todobackend.todo.repository.TaskRepository;

@Service
public class TaskService {
	
  private final TaskRepository taskRepository;
  
  public TaskService(TaskRepository taskRepository) {
	  this.taskRepository = taskRepository;	  
  }
  
  public List<Task> getAllTasks(){
	 return taskRepository.findAll();   
  }
  
  public void deleteTask(Long id) {
	  taskRepository.deleteById(id);
  }
  
  public Task addTask(String content) {
	  return taskRepository.saveAndFlush(new Task(content));
  }
  public Task updateTask(Long id, Task task ) {
	  Task currentTask = taskRepository.getById(id);
	  BeanUtils.copyProperties(task, currentTask,"task_id");
	  return taskRepository.saveAndFlush(currentTask);
	  
	  }
  
  
  
}
