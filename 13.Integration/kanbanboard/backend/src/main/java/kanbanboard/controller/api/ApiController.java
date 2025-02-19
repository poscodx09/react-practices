package kanbanboard.controller.api;

import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> getCards() {
		log.info("Request[GET /card");
		
		List<Card> cardList = cardRepository.findAll();
		System.out.println(cardList);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardList));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> getTasks(Long cardNo) {
		log.info("Request[GET /task");
		
		List<Task> taskList = taskRepository.findAllByCardNo(cardNo);
		System.out.println(taskList);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskList));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult<Task>> postTask(@RequestBody Task task) {
		
		log.info("Request[POST /task");
		
		taskRepository.insert(task);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(task));
	}
	
	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<Object>> putTask(@PathVariable Long no, String done) {
		log.info("Request[PUT /task/{}", no);
		
		taskRepository.updateDone(no, done);
		Map<String, Object> response = new HashMap<>();
		response.put("no", no);
		response.put("done", done);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(response));
	}
	
	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult<Long>> deleteTask(@PathVariable Long no) {
		log.info("Request[DELETE /task");
		
		taskRepository.delete(no);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
	
}
