package com.todobackend.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todobackend.todo.model.Task;

public interface TaskRepository extends JpaRepository<Task,Long>{

}
