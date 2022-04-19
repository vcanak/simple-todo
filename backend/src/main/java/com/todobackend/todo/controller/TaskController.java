package com.todobackend.todo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todobackend.todo.model.Task;
import com.todobackend.todo.service.TaskService;



@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/tasks")
public class TaskController {
	
	private TaskService taskService;

	public TaskController(TaskService taskService) {
		this.taskService = taskService;
	}
	
	@GetMapping
	public ResponseEntity<List<Task>> getAll(){
		return ResponseEntity.ok(taskService.getAllTasks());
		
	}
	
	@PostMapping
	public ResponseEntity<?> createTask(@RequestBody String content){
		
		return ResponseEntity.ok(taskService.addTask(content));
		
	}
	
	@PutMapping({"/{id}"})
	public ResponseEntity<Task> updateTask(@PathVariable Long id,@RequestBody Task task){
		
		return  ResponseEntity.ok(taskService.updateTask(id, task));
	}
	
	@DeleteMapping({"/{id}"})
	public ResponseEntity<Void> deleteTask(@PathVariable Long id){
		taskService.deleteTask(id);
		return ResponseEntity.ok().build();
	}
	
	
	

}
